const { exec } = require('child_process');
const fs = require('fs');

let configWsTlsJSON = JSON.parse(fs.readFileSync('/usr/src/v2ray/config_ws_tls.json'));
let inboundDetourPort = configWsTlsJSON.inboundDetour[0].port;

const mysqlInstance = require('./mysql_instance.js').createInstance();

exec(
    `/usr/src/v2ray/v2ctl api --server=127.0.0.1:${inboundDetourPort} StatsService.QueryStats 'pattern: "" reset: true'`,
    (err, stdout, stderr) => {
        if (err || stderr) {
            console.log('统计失败:', err, stderr);
            process.exit();
            return;
        }
        stdout = stdout.replace(/\n/g, '').split('stat: <  name: "').filter(v => v).map((v) => {
            return v.replace(/"  /g, '').split('value: ');
        });
        let obj = {};
        stdout.forEach(v => {
            let user = v[0].split('>>>');
            if (obj[user[1]] === void 0) {
                obj[user[1]] = {};
            }
            if (v[1] !== void 0) {
                v[1] = v[1].replace(/">/g, '');
            }
            // KB
            user[3] = user[3].replace(/">/g, '');
            let traffic = (parseFloat(v[1]) / 1024).toFixed(2);
            obj[user[1]][user[3]] = `${isNaN(traffic) === true ? '0.00' : traffic}`;
        });
        let result = [];

        for (let key in obj) {
            if (obj[key]['downlink'] !== '0.00') {
                let data = `("${key}","${obj[key]['uplink']}","${obj[key]['downlink']}")`;
                result.push(data);
            }
        }
        if (result.length !== 0) {
            result = result.join(',');
            mysqlInstance.query(`insert into traffic(user,uplink,downlink) values ${result}`, (err, result, fields) => {
                if (err) {
                    console.log('插入错误:', err);
                } else {
                    console.log('插入成功');
                }
                process.exit();
            });
        }
        mysqlInstance.end();
        process.exit();
    });
