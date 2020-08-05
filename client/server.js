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
const cors = require('cors');

// passport
const auth = require('./lib/auth');

const port = 3000;
const dev = 'development';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {

    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());

    // server.use(session({
    //   secret: 'very secrer',
    //   resave: 'true',
    //   saveUninitialized: false,
    //   store: new MongoStore({
    //     mongooseConnection: mongoose.connection
    //   })
    // }))

    server.use(cors());

    if (server.get('env') === 'production') {
      server.set('trust proxy', 'loopback');
      server.use(session({
        secret: 'another very secret 12345',
        name: 'sessionId',
        proxy: true,
        cookie: { secure: true },
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
      }));
    } else {
      server.use(session({
        secret: 'very secret 12345',
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
      }));
    }

      server.use(auth.initialize);
      server.use(auth.session);
      server.use(auth.setUser);


      server.use(auth.initialize);
      server.use(auth.session);
      
      /* ****************************************** BUYER ROUTES ****************************************** */
      server.get('buyer/login', (req, res) => {
        return app.render(req, res, 'buyer/login')
      })
      server.get('buyer/profile', (req, res) => {
        return app.render(req, res, 'buyer/profile')
      })

      server.post('buyer/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/register'
      }))

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