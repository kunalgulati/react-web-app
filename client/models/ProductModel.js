const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  certification: {
    type: Object,
    required: true,
  },
  city_of_origin: {
    type: String,
    required: true,
  },
  province_of_origin: {
    type: String,
    required: true,
  },
  country_of_origin: {
    type: String,
    required: true,
  },
  grade: {
    type: Object,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  gmo: {
    type: Boolean,
    required: true,
  },
  washed: {
    type: Boolean,
    required: true,
  },
  store_temperature_range: {
    type: Object,
    required: true,
  },
  store_humidity: {
    type: String,
    required: true,
  },
  chill_damage_sensitive: {
    type: Boolean,
    required: true,
  },
  pack_weight: {
    type: mongoose.Decimal128,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
  },
  minimum_quantity: {
    type: Number,
    required: true,
  },
  available:{
    type: Date,
    required: true,
  }

}, { timestamps: true });


const Products = mongoose.model('Product', ProductSchema);
module.exports = {Products};
