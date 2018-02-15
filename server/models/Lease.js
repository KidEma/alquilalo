// server/models/Lease.js
/*
|--------------------------------------
| Lease Model
|--------------------------------------
*/
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaseSchema = new Schema({
    _id: { type: String, index: { unique: true} },                      // Unique ID
    tenantsId: { type: [Number], required: true },                      // List of tenants in lease
    ownerIds: { type: [Number], required: true },                       // List of owners in lease
    agentIds: { type: [Number], required: true },                       // List of agents in lease
    startDate: { type: Date, required: false },                         // Start date of lease
    endDate: { type: Date, required: false },                           // End date of lease
    leaseInstalmentIds: { type: [Number], required: false }             // List of leaseInstalment IDs
});

module.exports = mongoose.model('Lease', leaseSchema);  
