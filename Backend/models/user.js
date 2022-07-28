const mongoose = require("mongoose")
// let uniqueValidator = require('mongoose-unique-validator');
const authLoginSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
            index: true
        },

        password: {
            type: String,
            required: [true, "please enter your email"],
            // select: false
        },
        phone: {
            type: Number,
            require: true,
            length: 11
        },
        country: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        address: {
            type: String,
            // require: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        


    }
)
authLoginSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
authLoginSchema.set('toJSON', {
    virtuals: true
})
const authModel = mongoose.model("User Data", authLoginSchema)
module.exports = authModel