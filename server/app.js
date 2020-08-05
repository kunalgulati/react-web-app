const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser');
const { ApolloServer } = require('apollo-server-express');

const bodyParser = require('body-parser');
const typeDefs = require('./schema.graphql');
const resolvers = require('./database/resolvers')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ****** GRAPHQL START ******* //
const server = new ApolloServer( {
  typeDefs, 
  resolvers,
  introspection: true,
  playground: true,
    engine: {
      apiKey: process.env.API_KEY,
      graphVariant: process.env.NODE_ENV
    },
    graphVariant: process.env.NODE_ENV
});
server.applyMiddleware({ 
  app, 
  path: '/graphql',});

// ****** GRAPHQL END ******* //


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
