"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SQL = require('sequelize');
var db = new SQL("dbpurifi", "root", "root", {
    dialect: "mysql",
    host: "127.0.0.1",
    logging: false,
    port: 3306,
});
exports.default = db;
//path doesnt work for some fucked reason
//# sourceMappingURL=database.js.map