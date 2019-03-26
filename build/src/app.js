//const express = require('express');
var exphbs = require('express-handlebars');
var bodyparser = require('body-parser');
var path = require('path');
// const router = express.Router();
var tables = require('./routes/tables');
//db inmport...
var SQL = require('sequelize');
var dbpurifi = new SQL("dbpurifi", "root", "root", {
    dialect: "mysql",
    host: "127.0.0.1",
    logging: false,
    port: 3306,
});
dbpurifi.authenticate()
    .then(function () { return console.log('Connected to DB'); })
    .catch(function (err) { return console.log('Error: ' + err); });
var app = express();
app.get('/', function (req, res) { return res.send('INDEX'); });
//routes..
router.get('/', function (req, res) {
    return tables.findAll()
        .then()
        .catch(function (err) { return console.log(err); });
});
var PORT = process.env.PORT || 3006;
app.listen(PORT, console.log("server started at port " + PORT));
//# sourceMappingURL=app.js.map