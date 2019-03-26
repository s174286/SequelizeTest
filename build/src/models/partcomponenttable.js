"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var allnames_1 = require("./allnames");
var dbpurifi = require('../app');
var PartComponentTable = dbpurifi.define("PartTable", {
    PartKey: {
        primaryKey: true,
        type: sequelize_1.default.STRING,
        unique: true,
        allowNull: false
    },
    PartTypeNr: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        references: {
            model: allnames_1.default,
            key: 'AllTypeNr',
        }
    },
    Toolnr: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    VersionNr: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    RevisionNr: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    W: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    Supplier: {
        type: sequelize_1.default.STRING,
    },
    QDate: {
        type: sequelize_1.default.STRING,
    },
    TotalCost: {
        type: sequelize_1.default.STRING,
    },
    QQuant: {
        type: sequelize_1.default.STRING,
    },
    UnitCost: {
        type: sequelize_1.default.STRING,
    },
    UnitCostKg: {
        type: sequelize_1.default.STRING,
    },
});
PartComponentTable.hasMany(allnames_1.default);
PartComponentTable.sync().then(function () {
});
exports.default = PartComponentTable;
//# sourceMappingURL=partcomponenttable.js.map