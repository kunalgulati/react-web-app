const mongoose = require('mongoose');

const OrderCartSchema = mongoose.Schema({
  user_id:{
    type: mongoose.ObjectId,
    required: true,
  },
  product_id:{
    type: mongoose.ObjectId,
    required: true,
  },
  quantity:{
    type: Number,
    required: true,
  }
}, { timestamps: true });


const OrderCartItems = mongoose.model('OrderCartItem', OrderCartSchema);
module.exports = {OrderCartItems};
