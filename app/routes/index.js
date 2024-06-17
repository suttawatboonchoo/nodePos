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
router.get('/product', (req , res) => {
  let sql = "SELECT * FROM tb_product";
  mysql.query(sql, (err , rs) => {
    if(err) {
      res.send(err);
    } else {
      console.log(rs);
      res.render('product', {products: rs});
    }
  })
});

module.exports = router;
