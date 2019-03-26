"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var dbpurifi = require('../app');
var Drivers = dbpurifi.define("Drivers", {
    Driver: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
});
Drivers.sync().then(function () {
});
exports.default = Drivers;
//# sourceMappingURL=driver.js.map