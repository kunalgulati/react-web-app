'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    // title: DataTypes.STRING,
    // description: DataTypes.STRING,
    // certification: DataTypes.JSON,
    // city_of_origin: DataTypes.STRING,
    // province_of_origin: DataTypes.STRING,
    // country_of_origin: DataTypes.STRING,
    // grade: DataTypes.JSON,
    // size: DataTypes.STRING,
    gmo: DataTypes.BOOLEAN,
    washed: DataTypes.BOOLEAN,
    store_temperature_range: DataTypes.STRING,
    store_humidity: DataTypes.STRING,
    chill_damage_sensitive: DataTypes.BOOLEAN,
    pack_weight: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    minimum_quantity: DataTypes.INTEGER,
    available: DataTypes.DATEONLY
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};