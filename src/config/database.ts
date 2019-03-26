const SQL = require('sequelize');

const db = new SQL(
    "dbpurifi",
    "root",
    "root",
    {
        dialect: "mysql",
        host: "127.0.0.1",
        logging: false,
        port: 3306,
    },
);

export default db;

//path doesnt work for some fucked reason