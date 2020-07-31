var express = require('express');
var router = express.Router();

router.get('buyer/marketplace', (req, res) => {
  return res.redirect(req, res, 'buyer/marketplace')
})

router.get('buyer/viewProduct', (req, res) => {
  return res.redirect(req, res, 'buyer/viewProduct')
})

module.exports = router;