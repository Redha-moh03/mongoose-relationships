const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 100,
    }
}, { timestamps: true })

const Category = mongoose.model('Category', categorySchema)

module.exports = Category