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

const Products = sequelize.define('Products', {
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true, 
  },
  title: { type: Sequelize.STRING},
  description: { type: Sequelize.STRING },
  certification: { type: Sequelize.JSON },
  city_of_origin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  province_of_origin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country_of_origin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  grade: {
    type: Sequelize.JSON,
    allowNull: false
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gmo: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  washed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  store_temperature_range: {
    type: Sequelize.STRING,allowNull: false
  },
  store_humidity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  chill_damage_sensitive: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  pack_weight: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  minimum_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  available: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
  // name: { type: Sequelize.STRING },
  // email: { type: Sequelize.STRING },
  // password: { type: Sequelize.STRING },
  // createdAt: { type: Sequelize.DATE },
  // updatedAt: { type: Sequelize.DATE },
});

module.exports = {Users, Products};