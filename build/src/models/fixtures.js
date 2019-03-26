"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var assemblies_1 = require("./assemblies");
var dbpurifi = require('../app');
var Fixtures = dbpurifi.define("Fixtures", {
    AssemblyKey: {
        primaryKey: true,
        type: sequelize_1.default.STRING,
        allowNull: false,
        references: {
            model: assemblies_1.default,
            key: 'AssemblyKey',
        }
    },
    Fixture: {
        primaryKey: true,
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
Fixtures.hasMany(assemblies_1.default);
Fixtures.sync().then(function () {
});
exports.default = Fixtures;
//# sourceMappingURL=fixtures.js.map