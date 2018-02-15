// server/models/LeaseInstalment.js
/*
|--------------------------------------
| LeaseInstalment Model
|--------------------------------------
*/
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaseInstalmentSchema = new Schema({
    _id: { type: Number, index: {unique: true} },                       // Unique ID of instalment
    value: { type: Number, required: true },                            // Amount of instalment cost
    currencyCode: { type: String, required: true },                     // ISO currency code of amount
    paymentDue: { type: Date, required: true },                         // Date instalment payment is due
    paymentReceived: { type: Date, required: false },                   // Date instalment payment is received 
    paymentDaysBetween: { type: Number, required: false },              // Records payment days between due & received, late or early
    latePenaltyPerDay: { type: Number, required: false }                // Daily penalty for late payments
});

module.exports = mongoose.model('LeaseInstalment', LeaseInstalmentSchema);  
