"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var driver_1 = require("./driver");
var dbpurifi = require('../app');
var DriverSpecifications = dbpurifi.define("DriverSpecifications", {
    SerialNumber: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    },
    ProdNo: {
        type: Sequelize.STRING,
    },
    ProdTime: {
        type: Sequelize.STRING,
    },
    TestRes: {
        type: Sequelize.STRING,
    },
    Driver: {
        type: Sequelize.STRING,
        references: {
            model: driver_1.default,
            key: 'Driver',
        }
    },
    BatchNo: {
        type: Sequelize.STRING,
    },
});
DriverSpecifications.hasMany(driver_1.default);
DriverSpecifications.sync().then(function () {
});
exports.default = DriverSpecifications;
//# sourceMappingURL=driverspecification.js.map