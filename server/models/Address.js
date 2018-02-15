// server/models/Address.js
/*
|--------------------------------------
| Lease Address
|--------------------------------------
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    _id: { type: String, index: { unique: true} },                      // Unique ID
    houseNumberBusinessName: { type: String, required: true },          // House name/number or business name
    line1: { type: String, required: false },                           // Address line 1
    line2: { type: String, required: false },                           // Address line 2
    line3: { type: String, required: false },                           // Address line 3
    cityTownLocality: { type: String, required: false },                // Address city/town name
    provinceCountyState: { type: String, required: false },             // Address state/county/province
    postalCode: { type: String, required: true },                       // Post code
    countryCodeISO: { type: String, required: true },                   // ISO Country code
    geoLat: { type: String, required: false },                          // Co-ordinates latitude
    geoLon: { type: String, required: false }                           // Co-ordinates longitude
});

module.exports = mongoose.model('Address', addressSchema);