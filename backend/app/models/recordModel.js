const {Schema, model} = require('mongoose')

const recordSchema = new Schema({
    name: String,
    description: String,
    location: String,
    bedrooms: Number,
    bathrooms: Number,
    status: String,
    price: Number
})
const Record = model('Record', recordSchema)
module.exports = Record