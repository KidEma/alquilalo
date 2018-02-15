// server/models/Photo.js
/*
|--------------------------------------
| Photo Model
|--------------------------------------
*/


//
// TODO:
// (preferred) Either encode base64 thumbnail of image during user upload
// (alternatively) store crop parameters to generate thumbnail when required
//
// Crop/thumbnail area needs to be defined during upload,
// preferably using some sort of visual area selection tool
//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    _id: { type: String, index: { unique: true} },                      // Unique ID
    filepath: { type: String, required: true },                         // Filename/url/path of full quality asset image file
    base64encoded: { type: String, required: false },                   // Thumbnail encoded in base64 string
    description: { type: String, required: false },                     // Display description or name of image
    photoDate: { type: Date, required: false },                         // Date photo was taken
    uploadedDate: { type: Date, required: false }                       // Date photo was uploaded (automatically generated)
});

module.exports = mongoose.model('Photo', PhotoSchema);  
