// Source: https://auth0.com/docs/quickstart/webapp/nodejs#configure-auth0

/** 
 * Goal is make sure, these routes are accessible to only the users, who are logged in 
*/

module.exports = function () {
  return function secured (req, res, next) {
    console.log("YODDHD");
    if (req.user) { return next(); }
    req.session.returnTo = req.originalUrl;
    res.redirect('/buyer/login');
  };
};
