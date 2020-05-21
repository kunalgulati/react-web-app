var express = require('express');
var router = express.Router();
var graphqlResolver  = require('../database/resolvers');


// render the /register view
// This works because we're already within the '/register' route so we're simply appending more routes to the '/register' endpoint

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

// router.get('/submit', function(req, res, next) {
//   res.render('register', { title: 'Register' });
// });

router.post('/submit', function(req, res, next) {
  // res.render('register', { title: 'Register' });
  if(graphqlResolver.Mutation.createUser(req.body)){
    res.render('index', { title: 'Register' });
  } else{
    // Erorr in registering
    res.render('register', { title: 'Register' });
  }

});



module.exports = router;
