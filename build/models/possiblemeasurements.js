"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var dbpurifi = require('../app');
var PossibleMeasurements = dbpurifi.define("PossibleMeasurements", {
    Measurements: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
});
PossibleMeasurements.sync().then(function () {
});
exports.default = PossibleMeasurements;
// module.exports = SampleIDTable;
//# sourceMappingURL=possiblemeasurements.js.map