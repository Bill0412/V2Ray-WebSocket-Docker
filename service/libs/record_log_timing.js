const { exec } = require('child_process');
const mysqlInstance = require('./mysql_instance.js').createInstance();
let path = '/usr/src/v2ray/v2ray_access_ws_tls.log';

exec(`cat ${path}|awk '{print $1" "$2" "$3" "$5" "$6}'`, (err, stdout, stderr) => {
    if (err || stderr) {
        console.log('获取文件内容失败:', stderr);
        process.exit();
        return;
    }
    exec(`echo ''>${path}`);
    stdout = stdout.split('\n');
    stdout = Array.from(new Set(stdout.filter(v => v != '').map(v => {
        v = v.split(' ');
        let createTime = null;
        (v[0] && v[1]) && (createTime = `${v[0]} ${v[1]}`);

        let ip = null;
        (v[2] && v[2].split(':').length !== 0) && (ip = `${v[2].split(':')[0]}`);

        let targetContent = null;
        (v[3] && v[3].split(':').length !== 0) && (targetContent = `${v[3].split(':')[1]}`);

        let email = null;
        (v[4] && v[4].split(':')) && (email = `${v[4].split(':')[1]}`);
        if (createTime == null) {
            return null;
        }
        return `("${ip}","${targetContent}","${email}","${createTime}")`;
    }))).filter(v => v);

    if (stdout.length === 0) {
        console.log('数据为空不写入');
        process.exit();
    } else if (stdout.length !== 0) {
        let sql = `insert into record(ip,targetContent,email,createtime) values${stdout.join(',')}`;
        mysqlInstance.query(sql,
            (err, result, fields) => {
                if (err) {
                    console.log('插入错误:', err);
                } else {
                    console.log('插入成功');
                }
                process.exit();
            });
        mysqlInstance.end();
    } else {
        process.exit();
    }

});
