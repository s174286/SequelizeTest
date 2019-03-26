//const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
// const router = express.Router();
const tables = require('./routes/tables')


//db inmport...
const SQL = require('sequelize');

const dbpurifi = new SQL(
    "dbpurifi",
    "root",
    "root",
    {
        dialect: "mysql",
        host: "127.0.0.1",
        logging: false,
        port: 3306,
    },
);


dbpurifi.authenticate()
.then(() => console.log('Connected to DB'))
.catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

//routes..

router.get('/', (req, res) =>
  tables.findAll()
  .then()
  .catch(err => console.log(err)));


const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`server started at port ${PORT}`));