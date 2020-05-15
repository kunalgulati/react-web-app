var Sequelize = require('sequelize');
var _ = require('lodash');
var casual = require('casual');

const sequelize = new Sequelize('forkcha', 'kunalgulati', 'forkcha', {
  dialect: 'postgres',
  storage: '../database.postgresql'
})

const Users = sequelize.define('Users', {
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true, 
  },
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
});

module.exports = {Users};