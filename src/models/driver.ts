import Sequelize = require("sequelize");

const dbpurifi = require('../app');

var Drivers = dbpurifi.define("Drivers", {
    Driver : {
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    
        
    });

    Drivers.sync().then(function() {

    })

    export default Drivers;