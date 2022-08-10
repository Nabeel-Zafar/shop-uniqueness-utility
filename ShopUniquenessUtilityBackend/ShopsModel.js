const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Shops = new Schema({
    Dist_Category: { type: String },
    Type: { type: String },
    Circle: {
        type: String
    },
    Region: {
        type: String
    },
    Area: {
        type: String
    },
    Territory: {
        type: String
    },
    Town: {
        type: String
    },
    Code: {
        type: String
    },
    Dist_Code: {
        type: String
    },
    Dist_Name: {
        type: String
    },
    Functionality: {
        type: String
    },
    Dist_Active: {
        type: String
    },
    Shop_ID: {
        type: String
    },
    Shop_Code: {
        type: String
    },
    Shop_Name: {
        type: String
    },
    Shop_Category: {
        type: String
    },
    Shop_Channel: {
        type: String
    },
    Shop_Classification: {
        type: String
    },
    Shops_Active: {
        type: String
    },
    Is_PJP: {
        type: String
    },
}, {
    collection: 'ShopsUniqueness'
})
module.exports = mongoose.model('Shops', Shops)