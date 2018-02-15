// server/models/User.js
/*
|--------------------------------------
| User Model
|--------------------------------------
*/

// List of possible userTypes:

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: String, index: { unique: true } },             // Unique identifier
    auth0UserId: { type: String, required: false},              // Possibly use this as unique index?
    userType: { type: String, required: true },                 // Type of user entity e.g person, business, legal entity
    displayName: { type: String, required: true },              // Display name used to refer to user
    legalId: { type: String, required: false },                 // Business CUIT/CUIL number, DNI/ID Card number
    title: { type: String, required: false },                   // Honorific e.g Mr, Mrs, Dr, President
    firstNames: { type: [String], required: false },            // First name(s) and middle name(s)
    lastName: { type: String, required: false },                // Last/famil surname
    emails: { type: [String], required: false },                // List of contact e-mail addresses
    primaryPhone: { type: String, required: false },            // Primary contact telephone number
    otherPhones: { type: [String], required: false },           // List of secondary telephone/mobile contact numbers
    faxPhones: { type: [String], required: false },             // Fax number(s)
    addressId: { type: Number, required: false }                // ID of address, link to address table
});

module.exports = mongoose.model('User', userSchema);  
