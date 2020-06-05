const express = require('express');
const next = require('next');
const config = require('./config')[process.env.NODE_ENV || 'development']

const db = require('./lib/db');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

// passport
const auth = require('./lib/auth');



const port = 3000;
const dev = 'development';
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare()
  .then(() =>{

    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());
    
    server.use(session({
      secret: 'very secrer',
      resave: 'true',
      saveUninitialized: false,
      store: new MongoStore({
        mongooseConnection: mongoose.connection
      })
    }))

    server.use(auth.initialize);
    server.use(auth.session);

    server.get('home', (req, res) => {
      return app.render(req, res, '/home')
    })

    server.get('login', (req, res) => {
      return app.render(req, res, '/login')
    })

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

    
    server.get('*', (req, res) =>{
      return handle(req,res);
    })

    //connnect to the DB
    db.connect(config.database.url)
      .then(()=>{
        console.log("successful MongoDB connection established");
        server.listen(port, (err)=>{
          if(err) throw err;
          console.log(`Ready on http://localhost:${port}`)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
)