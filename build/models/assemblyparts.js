"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var assemblies_1 = require("./assemblies");
var partcomponenttable_1 = require("./partcomponenttable");
var dbpurifi = require('../app');
var AssemblyParts = dbpurifi.define("AssemblyParts", {
    AssemblyKey: {
        primaryKey: true,
        type: sequelize_1.default.STRING,
        allowNull: false,
        references: {
            model: assemblies_1.default,
            key: 'AssemblyKey',
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
    InnerAssembly: {
        type: sequelize_1.default.STRING,
        references: {
            model: assemblies_1.default,
            key: 'AssemblyKey',
        }
    }
});
AssemblyParts.hasMany(assemblies_1.default);
AssemblyParts.hasMany(partcomponenttable_1.default);
AssemblyParts.sync().then(function () {
});
exports.default = AssemblyParts;
//# sourceMappingURL=assemblyparts.js.map