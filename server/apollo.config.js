const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  service: {
    // Must match the name of your graph in Graph Manager
    name: 'forkcha-test',
    endpoint:{
      url: "http://localhost:3000/graphql"
    }
  }
};