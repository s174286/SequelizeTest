import SQL from "sequelize";

const dbpurifi = require('../app');


var AllNames = dbpurifi.define("AllNames", {
    AllTypeNr: {
        primaryKey: true,
        type: SQL.STRING,
        unique: true,
        allowNull: false
    },
    AllNames: {
        type: SQL.STRING,
    },

});

AllNames.sync().then(function() {

})

export default AllNames;