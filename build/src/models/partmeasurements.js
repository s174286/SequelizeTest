"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dbpurifi = require('../app');
var partcomponenttable_1 = require("./partcomponenttable");
var possiblemeasurements_1 = require("./possiblemeasurements");
var PartMeasurements = dbpurifi.define("PartMeasurements", {
    Measurements: {
        primaryKey: true,
        type: sequelize_1.default.STRING,
        allowNull: false,
        references: {
            model: possiblemeasurements_1.default,
            key: 'AllTypeNr',
        }
    },
    PartKey: {
        primaryKey: true,
        type: sequelize_1.default.STRING,
        allowNull: false,
        references: {
            model: partcomponenttable_1.default,
            key: 'PartKey',
        }
    },
    MeasureValue: {
        type: sequelize_1.default.STRING
    }
});
PartMeasurements.hasMany(possiblemeasurements_1.default);
PartMeasurements.hasMany(partcomponenttable_1.default);
PartMeasurements.sync().then(function () {
});
//# sourceMappingURL=partmeasurements.js.map