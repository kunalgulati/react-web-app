'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      certification: {
        type: Sequelize.JSON,
        allowNull: false
      },
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};