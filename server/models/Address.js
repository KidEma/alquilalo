// server/models/Address.js
/*
|--------------------------------------
| Lease Address
|--------------------------------------
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    _id: { type: Number, index: { unique: true } },
    houseNumberBusinessName: { type: String, required: true },
    line1: { type: String, required: false },
    line2: { type: String, required: false },
    line3: { type: String, required: false },
    cityTownLocality: { type: String, required: false },
    provinceCountyState: { type: String, required: false },
    postalCode: { type: String, required: true },
    countryCodeISO: { type: String, required: true },
    geoLon: { type: String, required: false },
    geoLat: { type: String, required: false }
});

module.exports = mongoose.model('Address', addressSchema);