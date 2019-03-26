import SQL from "sequelize";

import AllNames from "./allnames";


const dbpurifi = require('../app');

var PartComponentTable = dbpurifi.define("PartTable", {
    PartKey: {
        primaryKey: true,
        type: SQL.STRING,
        unique: true,
        allowNull: false
    },
    PartTypeNr: {
        type: SQL.STRING,
        allowNull: false,
        references: {
            model: AllNames,
            key: 'AllTypeNr',
        }
    },
    Toolnr: {
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


PartComponentTable.hasMany(AllNames);

PartComponentTable.sync().then(function() {

})

export default PartComponentTable;