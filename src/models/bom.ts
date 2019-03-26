import Sequelize = require("sequelize");
import PartComponentTable from "./partcomponenttable";
import Assemblies from "./assemblies";
import Drivers from "./driver";

const dbpurifi = require('../app');

var BOM = dbpurifi.define("BOM", {
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
    PartKey: {
        type: Sequelize.STRING,
        references: {
         model: PartComponentTable,
         key: 'PartKey',
     }
    },
    AssemblyKey:  {
        type: Sequelize.STRING,
        references: {
         model: Assemblies,
         key: 'AssemblyKey',
     }
    },
    PartDesc:  {
        type: Sequelize.STRING,
    },

        
    });

    BOM.hasMany(Drivers);
    BOM.hasMany(PartComponentTable);
    BOM.hasMany(Assemblies);

    BOM.sync().then(function() {

    })

   export default BOM;


