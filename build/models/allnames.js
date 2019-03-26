"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dbpurifi = require('../app');
var AllNames = dbpurifi.define("AllNames", {
    AllTypeNr: {
        primaryKey: true,
        type: sequelize_1.default.STRING,
        unique: true,
        allowNull: false
    },
    AllNames: {
        type: sequelize_1.default.STRING,
    },
});
AllNames.sync().then(function () {
});
exports.default = AllNames;
//# sourceMappingURL=allnames.js.map