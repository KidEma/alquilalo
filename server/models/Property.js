// server/models/Property.js
/*
 |--------------------------------------
 | Property Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  title: { type: String, required: true },
  // House - Apartment
  propertyType: { type: String, required: true },
  functionalUnitNumber: { type: String },
  description: String,
  addressId: { type: String },
  // Users that can access property admin area
  administratorsId: { type: [String] },
  ownersId: { type: [String] },
  picturesId: { type: [String] },
});

module.exports = mongoose.model('Property', propertySchema);