// server/models/Lease.js
/*
|--------------------------------------
| Lease Model
|--------------------------------------
*/
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaseSchema = new Schema({
    _id: { type: String, index: { unique: true } },
    tenantsId: { type: [Number], required: true },
    ownerIds: { type: [Number], required: true },
    agentIds: { type: [Number], required: true },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    leaseInstalmentIds: { type: [Number], required: false },
});

module.exports = mongoose.model('Lease', leaseSchema);  
