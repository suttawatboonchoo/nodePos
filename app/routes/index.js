var express = require('express');
var router = express.Router();

const mysql2 = require('mysql2');
const mysql = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_nodepos'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
