// server/models/LeaseInstalment.js
/*
|--------------------------------------
| LeaseInstalment Model
|--------------------------------------
*/
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaseInstalmentSchema = new Schema({
    _id: { type: Number, index: {unique: true} },
    value: { type: Number, required: true },
    currencyCode: { type: String, required: true },
    paymentDue: { type: Date, required: true },
    paymentMade: { type: Date, required: false },
    daysLate: { type: Number, required: false },
    latePenaltyPerDay: { type: Number, required: false }
});

module.exports = mongoose.model('LeaseInstalment', LeaseInstalmentSchema);  
