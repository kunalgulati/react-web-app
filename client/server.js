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
      
      server.get('login', (req, res) => {
        return app.render(req, res, '/login')
      })
      server.get('profile', (req, res) => {
        return app.render(req, res, '/profile')
      })

      server.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/register'
      }))

      server.get('marketplace', (req, res) => {
        return app.render(req, res, '/marketplace')
      })

      server.get('register', (req, res) => {
        return app.render(req, res, '/register')
      })

      server.get('orderSummary', (req, res) => {
        return app.render(req, res, '/orderSummary')
      })
      server.get('orders', (req, res) => {
        return app.render(req, res, '/viewProduct')
      })

      // Delete
      server.get('viewProduct', (req, res) => {
        return app.render(req, res, '/viewProduct')
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