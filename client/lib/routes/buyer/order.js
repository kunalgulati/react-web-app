var express = require('express');
var router = express.Router();

router.get('buyer/orderSummary', (req, res) => {
  return res.redirect(req, res, 'buyer/orderSummary')
})
router.get('buyer/orders', (req, res) => {
  return res.redirect(req, res, 'buyer/viewProduct')
})

module.exports = router;