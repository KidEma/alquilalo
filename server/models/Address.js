// server/models/Address.js
/*
 |--------------------------------------
 | Lease Address
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    streetName: { type: String, required: true },
    streetNumber: { type: String, required: true },
    zipCode: { type: String, required: true },
    // geolocalization
    lat: {type: Number, required: true},
    long: { type: Number, required: true }
});

module.exports = mongoose.model('Address', addressSchema);  