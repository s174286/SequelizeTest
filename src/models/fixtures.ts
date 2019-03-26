import SQL from "sequelize";

import Assemblies from "./assemblies";

const dbpurifi = require('../app');

var Fixtures = dbpurifi.define("Fixtures", {
    AssemblyKey : {
        primaryKey: true,
        type: SQL.STRING,
        allowNull: false,
        references: {
            model: Assemblies,
            key: 'AssemblyKey',
        }
    },
    Fixture : {
        primaryKey: true,
        type: SQL.STRING,
        allowNull: false
    }

    
        
    });

    Fixtures.hasMany(Assemblies);

    Fixtures.sync().then(function() {

    })

    export default Fixtures;