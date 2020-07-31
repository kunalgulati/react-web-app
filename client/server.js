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

var authRouter =  require('./lib/routes/buyer/auth');
var userRouter  =   require('./lib/routes/buyer/user');
var orderRouter =  require('./lib/routes/buyer/order');
var productRouter =  require('./lib/routes/buyer/product');

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

const port = 3000;
const dev = 'development';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
  .then(() => {

    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());

    // config express-session
    var sess = {
      secret: process.env.SESSION_SECRET,
      cookie: {},
      resave: false,
      saveUninitialized: true
    }


    if (server.get('env') === 'production') {
      // Use secure cookies in production (requires SSL/TLS)
      sess.cookie.secure = true;

      // Uncomment the line below if your application is behind a proxy (like on Heroku)
      // or if you're encountering the error message:
      // "Unable to verify authorization request state"
      // app.set('trust proxy', 1);
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

    /** 
     * Routes in the following file: (Buyer)
        * Login, Logout, callback
    */
    server.use('/', authRouter);
    
    /** 
     * Routes in the following file: (Buyer)
        * Profile
    */
    server.use('/', userRouter);
    
    /** 
     * Routes in the following file:
        * Marketplace, ViewProduct
    */
    server.use('/', productRouter);

    /** 
     * Routes in the following file:
        * Orders, OrderSummary
    */
    server.use('/', orderRouter);
    
    

  


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