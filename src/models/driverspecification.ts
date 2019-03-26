import Sequelize = require("sequelize");
import Drivers from "./driver";

const dbpurifi = require('../app');

var DriverSpecifications = dbpurifi.define("DriverSpecifications", {
    SerialNumber: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    },
    ProdNo: {
        type: Sequelize.STRING,
    },
    ProdTime:  {
        type: Sequelize.STRING,
    },
    TestRes:  {
        type: Sequelize.STRING,
    },
    Driver:  {
        type: Sequelize.STRING,
        references: {
            model: Drivers,
            key: 'Driver',
        }
    },
    BatchNo:  {
        type: Sequelize.STRING,
    },

        
    });

    DriverSpecifications.hasMany(Drivers);

    DriverSpecifications.sync().then(function() {

    })

   export default DriverSpecifications;


