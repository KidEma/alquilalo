// server/models/Lease.js
/*
 |--------------------------------------
 | Lease Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaseSchema = new Schema({
    tenantsId: { type: [String] },
    propertyId: { type: String, required: true },
    startDatetime: { type: Date, required: true },
    endDatetime: { type: Date, required: true },
    active: { type: Boolean, required: true },
    comments: String
});

module.exports = mongoose.model('Lease', leaseSchema);  