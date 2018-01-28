// server/models/PropertyToExpire.js
/*
 |--------------------------------------
 | Property to Expire Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  title: { type: String, required: true },
  photo: {type: String},
  expiryDate: {type: Date},
  amount: {type: Number}
});

module.exports = mongoose.model('Property', propertySchema);