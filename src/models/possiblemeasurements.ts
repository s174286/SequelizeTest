import Sequelize = require("sequelize");

const dbpurifi = require('../app');

var PossibleMeasurements = dbpurifi.define("PossibleMeasurements", {
    Measurements : {
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    
        
    });

    PossibleMeasurements.sync().then(function() {

    })

export default PossibleMeasurements;
   // module.exports = SampleIDTable;


