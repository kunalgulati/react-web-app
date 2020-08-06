const mongoose = require('mongoose');

module.exports.connect = async url => mongoose.connect(url, { useUnifiedTopology: true , useNewUrlParser:true});