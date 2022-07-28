const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "pease enter your product Name"]
    },
    description: {
        type: String,
        require: [true, "pease enter your product Description"],
        min: 40,
        max: 140
    },
    richDescription: {
        type: String
    },
    frontImage: {
        type: String,
        require: [true, "pease enter your product Image"]
    },
    images: [
        { type: String, require: true }
    ],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catageory'
    },
    inStock: {
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
productSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
productSchema.set('toJSON', {
    virtuals: true
})
const product_model = mongoose.model("Product", productSchema)
module.exports = product_model