import Sequelize = require("sequelize");

import Drivers from "./driver"

const dbpurifi = require('../app');

var SampleID = dbpurifi.define("SampleID", {
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
    sampleClient: {
        type: Sequelize.STRING,
    },
    SampleNo:  {
        type: Sequelize.STRING,
    },
    SampleDate:  {
        type: Sequelize.STRING,
    },
    SampleDesc:  {
        type: Sequelize.STRING,
    }, 
        
    });

    SampleID.hasMany

    SampleID.sync().then(function() {

    })

    export default SampleID;


