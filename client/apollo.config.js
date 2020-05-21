const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  service: {
    // Must match the name of your graph in Graph Manager
    name: "forkcha",
    endpoint: {
      url: "http://localhost:3000/graphql"
    }
 
  }
};

// endpoint: {
  // url: "http://localhost:3000/graphql"
// }

// https://medium.com/naresh-bhatia/graphql-concepts-i-wish-someone-explained-to-me-a-year-ago-514d5b3c0eab