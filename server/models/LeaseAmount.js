// server/models/LeaseAmount.js
/*
 |--------------------------------------
 | LeaseAmount Model
 |--------------------------------------
 */

 // For lease amounts that vary through time
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaseAmountSchema = new Schema({
    // TODO: two lease amounts can't be active at the same time - dates can't overlap
    leaseId: { type: String, required: true },
    startDatetime: { type: Date, required: true },
    endDatetime: { type: Date, required: true },
    amount: { type: Number, required: true },
    paymentType: { type: String, required: true },
});

module.exports = mongoose.model('LeaseAmount', leaseAmountSchema);  