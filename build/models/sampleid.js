"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var driver_1 = require("./driver");
var dbpurifi = require('../app');
var SampleID = dbpurifi.define("SampleID", {
    Driver: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
            model: driver_1.default,
            key: 'Driver',
        }
    },
    sampleClient: {
        type: Sequelize.STRING,
    },
    SampleNo: {
        type: Sequelize.STRING,
    },
    SampleDate: {
        type: Sequelize.STRING,
    },
    SampleDesc: {
        type: Sequelize.STRING,
    },
});
SampleID.hasMany;
SampleID.sync().then(function () {
});
exports.default = SampleID;
//# sourceMappingURL=sampleid.js.map