import SQL from "sequelize";


const dbpurifi = require('../app');

import PartComponenttable from "./partcomponenttable";
import PossibleMeasurements from "./possiblemeasurements";


var PartMeasurements = dbpurifi.define("PartMeasurements", {
    Measurements : {
        primaryKey: true,
        type: SQL.STRING,
        allowNull: false,
        references: {
            model: PossibleMeasurements,
            key: 'AllTypeNr',
        }
    },
    PartKey : {
        primaryKey: true,
        type: SQL.STRING,
        allowNull: false,
        references: {
            model: PartComponenttable,
            key: 'PartKey',
        }
    },
    MeasureValue : {
        type: SQL.STRING
    }

    });

    PartMeasurements.hasMany(PossibleMeasurements);
    PartMeasurements.hasMany(PartComponenttable);

    PartMeasurements.sync().then(function() {

    })