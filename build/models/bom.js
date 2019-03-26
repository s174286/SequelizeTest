"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var partcomponenttable_1 = require("./partcomponenttable");
var assemblies_1 = require("./assemblies");
var driver_1 = require("./driver");
var dbpurifi = require('../app');
var BOM = dbpurifi.define("BOM", {
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
    PartKey: {
        type: Sequelize.STRING,
        references: {
            model: partcomponenttable_1.default,
            key: 'PartKey',
        }
    },
    AssemblyKey: {
        type: Sequelize.STRING,
        references: {
            model: assemblies_1.default,
            key: 'AssemblyKey',
        }
    },
    PartDesc: {
        type: Sequelize.STRING,
    },
});
BOM.hasMany(driver_1.default);
BOM.hasMany(partcomponenttable_1.default);
BOM.hasMany(assemblies_1.default);
BOM.sync().then(function () {
});
exports.default = BOM;
//# sourceMappingURL=bom.js.map