const express = require('express');
const router = express.router();

//import dbpurifi from '../app';

exports.default = router.get('/', (req: any, res: any) => res.send('TABLES'));