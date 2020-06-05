require('dotenv').config();

module.exports = {
  development: {
    sitename: 'Forkcha [Development]',
    database: {
      url: process.env.DEVELOPMENT_DB_URL,
    },
  },
  production: {
    sitename: 'Forkcha',
    database: {
      url: process.env.PRODUCTION_DB_URL,
    },
  },
  test: {
    sitename: 'Forkcha [Test]',
    database: {
      url: process.env.TEST_DB_URL,
    },
  },
};