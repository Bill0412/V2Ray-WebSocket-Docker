const createInstance = () => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'v2ray-mysql',
        user: 'root',
        password: 'j5o2o3o7fgf0dd4rryd03d7',
        database: 'v2ray_log',
        port: 3306,
    });
    connection.connect();
    return connection;
};

module.exports = {
    createInstance,
};
