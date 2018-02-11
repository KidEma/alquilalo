// server/models/User.js
/*
|--------------------------------------
| User Model
|--------------------------------------
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: String, index: { unique: true } },
    auth0UserId: { type: String, required: false}, // Possibly use this as unique index?
    userType: { type: String, required: true },
    displayName: { type: String, required: true },
    legalId: { type: String, required: false },
    title: { type: String, required: false },
    firstNames: { type: [String], required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    homePhone: { type: String, required: false },
    otherPhone: { type: String, required: false },
    faxPhone: { type: String, required: false },
    addressId: { type: Number, required: false },
});

module.exports = mongoose.model('User', userSchema);  
