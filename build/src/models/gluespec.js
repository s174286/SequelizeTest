"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var driver_1 = require("./driver");
var partcomponenttable_1 = require("./partcomponenttable");
var allnames_1 = require("./allnames");
var dbpurifi = require('../app');
var GlueSpec = dbpurifi.define("GlueSpec", {
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
    GluePiece1: {
        type: Sequelize.STRING,
        references: {
            model: allnames_1.default,
            key: 'AllTypeNr',
        }
    },
    GluePiece2: {
        type: Sequelize.STRING,
        references: {
            model: allnames_1.default,
            key: 'AllTypeNr',
        }
    },
    PartKey: {
        type: Sequelize.STRING,
        references: {
            model: partcomponenttable_1.default,
            key: 'PartKey',
        }
    },
    Weight: {
        type: Sequelize.STRING,
    },
    SpecCom: {
        type: Sequelize.STRING,
    },
});
GlueSpec.hasMany(driver_1.default);
GlueSpec.hasMany(allnames_1.default);
GlueSpec.hasMany(partcomponenttable_1.default);
GlueSpec.sync().then(function () {
});
//# sourceMappingURL=gluespec.js.map