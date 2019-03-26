import Sequelize = require("sequelize");
import Drivers from "./driver";
import PartComponentTable from "./partcomponenttable";
import AllNames from "./allnames";

const dbpurifi = require('../app');

var GlueSpec = dbpurifi.define("GlueSpec", {
    Driver: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
            model: Drivers,
            key: 'Driver',
        }
    },
    GluePiece1: {
        type: Sequelize.STRING,
        references: {
            model: AllNames,
            key: 'AllTypeNr',
        }
    },
    GluePiece2:  {
        type: Sequelize.STRING,
        references: {
            model: AllNames,
            key: 'AllTypeNr',
        }
    },
    PartKey:  {
        type: Sequelize.STRING,
        references: {
            model: PartComponentTable,
            key: 'PartKey',
        }
    },
    Weight:  {
        type: Sequelize.STRING,
    }, 
    SpecCom:  {
        type: Sequelize.STRING,
    }, 
        
    });

    GlueSpec.hasMany(Drivers);
    GlueSpec.hasMany(AllNames);
    GlueSpec.hasMany(PartComponentTable);
 
    GlueSpec.sync().then(function() {

    })

