const mongoose = require("mongoose")
const User = require("./User")

const reviewSchema = new mongoose.Schema({
    ReviewTitle: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 100,
    },
    reviewBody: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 30
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
}, { timestamps: true })

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review