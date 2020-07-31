var express = require('express');
var router = express.Router();

var secured = require('../../middleware/secured');

router.get('buyer/profile', secured(), (req, res) => {
  return res.redirect(req, res, 'buyer/profile')
})

module.exports = router;