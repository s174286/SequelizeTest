import SQL from "sequelize";

import Assemblies from "./assemblies";
import PartComponentTable from "./partcomponenttable";

const dbpurifi = require('../app');

var AssemblyParts = dbpurifi.define("AssemblyParts", {
    AssemblyKey : {
        primaryKey: true,
        type: SQL.STRING,
        allowNull: false,
        references: {
            model: Assemblies,
            key: 'AssemblyKey',
        }
    },
    PartKey : {
        primaryKey: true,
        type: SQL.STRING,
        allowNull: false,
        references: {
            model: PartComponentTable,
            key: 'PartKey',
        }
    },
    InnerAssembly : {
        type: SQL.STRING,
        references: {
            model: Assemblies,
            key: 'AssemblyKey',
        }
    }

    
        
    });

    AssemblyParts.hasMany(Assemblies);
    AssemblyParts.hasMany(PartComponentTable);

    AssemblyParts.sync().then(function() {

    })

    export default AssemblyParts;