var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop_produce', { title: 'shop produce' });
});

module.exports = router;
