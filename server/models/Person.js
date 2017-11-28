// server/models/Person.js
/*
 |--------------------------------------
 | Person Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: { type: String, required: true },
    // ie: CUIT - CUIL
    commercialIdNumber: { type: String, required: true },
    personType: { type: String, required: true },    
    commercialAddresId: { type: String },
    actualAddresId: { type: String },
    // Physical Person - Juridic Person
    comments: String
});

module.exports = mongoose.model('Person', personSchema);  