var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

var cookieParser = require('cookie-parser');
const { ApolloServer } = require('apollo-server-express');


var bodyParser = require('body-parser');
var typeDefs = require('./schema.graphql');
const resolvers = require('./database/resolvers')
// const LaunchAPI = require('./datasources/launch');
// const UserAPI = require('./datasources/user');




var index = require('./routes/index');
var users = require('./routes/users');
var registerRouter = require('./routes/register');
var marketplaceRouter = require('./routes/marketplace');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cookieParser());
// app.use(session({
//   secret: 'kunal123',
//   resave: true,
//   saveUninitialized: false,
//   store: new 

// }));




app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/register', registerRouter);
app.use('/marketplace', marketplaceRouter);


// ****** GRAPHQL START ******* //
const server = new ApolloServer( {
  typeDefs, 
  resolvers,
  // dataSources: () => ({
  //   launchAPI: new LaunchAPI(),
  //   userAPI: new UserAPI({ store })
  // }),
  engine: {
    apiKey: "service:forkcha:LReYdo78t37nii1vRmQ6eA",
    graphVariant: process.env.NODE_ENV
  }, 
});
server.applyMiddleware({ app, path: '/graphql' });

// ****** GRAPHQL END ******* //


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
