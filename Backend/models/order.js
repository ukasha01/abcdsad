const mongoose = require('mongoose')
// const { orderItems } = require('./orderItem')

const orderSchema = mongoose.Schema({
    orderitems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        require: true
    }],
    shippingAddress: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        // require: true
    },
    phone: {
        type: String,
        require: true,

    },
    status: {
        type: String,
        require: true,
        default: 'pending'
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User Data'
    },
    dateOrder: {
        type: Date,
        default: Date.now
    }


})
orderSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
orderSchema.set('toJSON', {
    virtuals: true
})
const orderModel = mongoose.model('Order' , orderSchema)
module.exports = orderModel
