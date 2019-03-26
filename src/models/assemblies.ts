import SQL from "sequelize";

import AllNames from "./allnames";

const dbpurifi = require('../app');

var Assemblies = dbpurifi.define("Assemblies", {
    AssemblyKey: {
        primaryKey: true,
        type: SQL.STRING,
        unique: true,
        allowNull: false
    },
    AssemblyTypeNr: {
        type: SQL.STRING,
        allowNull: false,
        references: {
            model: AllNames,
            key: 'AllTypeNr',
        }
    },
    AssemblyNr: {
        type: SQL.STRING,
        allowNull: false
    },
    VersionNr: {
        type: SQL.STRING,
        allowNull: false
    },
    RevisionNr: {
        type: SQL.STRING,
        allowNull: false
    },
    W: {
        type: SQL.STRING,
        allowNull: false
    },
    Supplier: {
        type: SQL.STRING,
    },
    QDate: {
        type: SQL.STRING,
    },
    TotalCost: {
        type: SQL.STRING,
    },
    QQuant: {
        type: SQL.STRING,
    },
    UnitCost: {
        type: SQL.STRING,
    },
    UnitCostKg: {
        type: SQL.STRING,
    },



});



Assemblies.sync().then(function() {

})

export default Assemblies;