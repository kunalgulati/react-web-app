var Sequelize = require('sequelize');
var _ = require('lodash');
var casual = require('casual');

const sequelize = new Sequelize('forkcha', 'kunalgulati', 'forkcha', {
  dialect: 'postgres',
  storage: './aliens.postgres'
})

const Aliens = sequelize.define('alines',{ 
  firstName: {type: Sequelize.STRING},
  lastName: {type: Sequelize.STRING},
  planet: {type: Sequelize.STRING},
})

// Aliens.sync({force: true}).then(() =>{
//   _.times(10, (i) => {
//     Aliens.create({
//       firstName: casual._first_name,
//       lastName: casual._last_name,
//       planet: casual.word
//     })
//   })
// })

module.exports = {Aliens};