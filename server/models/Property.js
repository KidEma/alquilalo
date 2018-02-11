// server/models/Property.js
/*
|--------------------------------------
| Property Model
|--------------------------------------
*/

// Property types:
// APARTMENT: (or condo, studio) Self-contained unit within another part of a building and can vary in size. Studio apartments combine living room, bedroom and kitchen in to a single area.
// BUNGALOW: (or cottage) Often a one-story home where upper rooms may be set in the roof/attic. Sometimes with a broad front porch, can be built in a wide range of materials including wattle, stone, daub or wood.
// CABIN: (or chalet) Generally a simple one-story home with a limited amount of rooms. Chalets are luxury cabins which may come with paneled sides and heavy angled roofs and sometimes built-in jacuzzis, fireplaces, decks and verandas.
// ESTATE: (or manor, chateau) Top-class and very expensive often includes multiple buildings, outhouses, garages, gardens, and lots of surrounding land.
// HOUSE: (or home) Generally a house usually comes with various bedrooms and bathrooms, equipped with a full kitchen, washroom, living room, possibly with garden and garage.
// MANSION: (or villa) Large, upper-class, often expensive and impressive house.
// SHARED: (or share, room, hostel, joint tenancy) Shared living space can refer to a single room or shared home, communal living.
// TOWNHOUSE: (or rowhouse) Generally lower-class, tall and narrow housing with close proximity to neighbors and shared walls, usually attached or semi-detached.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    _id: { type: String, index: { unique: true } },
    title: { type: String, required: true },
    description: { type: String, required: false },
    type: { type: String, required: false },
    photoThumb: { type: String, required: false },
    photos: { type: [String], required: false },
    activeLeaseId: { type: Number, required: false },
    leaseIds: { type: [Number], required: false },
    userIds: { type: [Number], required: false },
    ownerIds: { type: [Number], required: false },
    agencyId: { type: Number, required: false },
    addressId: { type: Number, required: false },
    bathRooms: { type: Number, required: false },
    bedRooms: { type: Number, required: false },
    totalRooms: { type: Number, required: false },
    furnished: { type: Boolean, required: false }
});

module.exports = mongoose.model('Property', propertySchema);
