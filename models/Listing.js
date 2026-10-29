const mongoose = require("mongoose")
const User = require("./User")
const Category = require("./Category")

const listingSchema = new mongoose.Schema({
    streetAdress: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30
    },
    city: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 15

    },
    price: {
        type: Number,
        min: 0.1,
        max: 200

    },
    size: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category,
    },
}, { timestamps: true })

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing