const express = require('express');
const next = require('next');
const config = require('./config')[process.env.NODE_ENV || 'development']

const db = require('./lib/db');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const passport = require('passport');
const UserModel = require('./models/UserModel');
const cors = require('cors');

// Load Passport
var Auth0Strategy = require('passport-auth0');

var util = require('util');
var url = require('url');
var querystring = require('querystring');

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/buyer/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

// config express-session
var sess = {
  secret: 'CHANGE THIS TO A RANDOM SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true
};


const port = 3000;
const dev = 'development';
const app = next({ dev });
const handle = app.getRequestHandler();



var router = express.Router();

app.prepare()
  .then(() => {

    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());

    
    if (server.get('env') === 'production') {
      sess.cookie.secure = true;
    } else {
      // server.use(session({
      //   secret: 'another very secret 12345',
      //   name: 'sessionId',
      //   proxy: true,
      //   cookie: { secure: true },
      //   resave: true,
      //   saveUninitialized: false,
      //   store: new MongoStore({ mongooseConnection: mongoose.connection }),
      // }));
    }
    
    // Passport
    server.use(session(sess));
    server.use(passport.initialize());
    server.use(passport.session());

    // You can use this section to keep a smaller payload
    passport.serializeUser(function (user, done) {
      done(null, user);
    });

    passport.deserializeUser(function (user, done) {
      done(null, user);
    });

      /* ****************************************** BUYER ROUTES ****************************************** */
      // server.get('buyer/login', (req, res) => {
      //   return app.render(req, res, 'buyer/login')
      // })

      server.get('/buyer/login', passport.authenticate('auth0', {
        scope: 'openid email profile'
      }), function (req, res) {
        res.redirect('/');
      });

      // Perform the final stage of authentication and redirect to previously requested URL or '/user'
      // router.get('/buyer/callback', function (req, res, next) {
      //   passport.authenticate('auth0', function (err, user, info) {
      //     if (err) { return next(err); }
      //     if (!user) { 
      //       // return res.redirect('/login'); 
      //       return app.render(req, res, 'buyer/marketplace')
      //     }
      //     req.logIn(user, function (err) {
      //       if (err) { return next(err); }
      //       const returnTo = req.session.returnTo;
      //       delete req.session.returnTo;
      //       res.redirect(returnTo || '/user');
      //     });
      //   })(req, res, next);
      // });
      

      // Perform session logout and redirect to homepage
      server.get('/buyer/logout', (req, res) => {
        req.logout();

        var returnTo = req.protocol + '://' + req.hostname;
        var port = req.connection.localPort;
        if (port !== undefined && port !== 80 && port !== 443) {
          returnTo += ':' + port;
        }
        var logoutURL = new url.URL(
          util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
        );
        var searchString = querystring.stringify({
          client_id: process.env.AUTH0_CLIENT_ID,
          returnTo: returnTo
        });
        logoutURL.search = searchString;

        res.redirect(logoutURL);
      });

      
      server.get('buyer/profile', (req, res) => {
        return app.render(req, res, 'buyer/profile')
      })

      // server.post('buyer/login', passport.authenticate('local', {
      //   successRedirect: '/',
      //   failureRedirect: '/register'
      // }))

      server.get('buyer/marketplace', (req, res) => {
        return app.render(req, res, 'buyer/marketplace')
      })

      server.get('buyer/register', (req, res) => {
        return app.render(req, res, 'buyer/register')
      })

      server.get('buyer/orderSummary', (req, res) => {
        return app.render(req, res, 'buyer/orderSummary')
      })
      server.get('buyer/orders', (req, res) => {
        return app.render(req, res, 'buyer/viewProduct')
      })

      // Delete
      server.get('buyer/viewProduct', (req, res) => {
        return app.render(req, res, 'buyer/viewProduct')
      })

      /* ****************************************** SUPPLIER ROUTES ****************************************** */
      server.get('supplier/register', (req, res) => {
        return app.render(req, res, 'supplier/register')
      })
      server.get('supplier/login', (req, res) => {
        return app.render(req, res, 'supplier/login')
      })
      server.get('supplier/home', (req, res) => {
        return app.render(req, res, 'supplier/home')
      })
      server.get('supplier/viewProduct', (req, res) => {
        return app.render(req, res, 'supplier/viewProduct')
      })





      server.get('*', (req, res) => {
        return handle(req, res);
      })

      //connnect to the DB
      db.connect(config.database.url)
        .then(() => {
          console.log("successful MongoDB connection established");
          server.listen(port, (err) => {
            if (err) throw err;
            console.log(`Ready on http://localhost:${port}`)
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  )