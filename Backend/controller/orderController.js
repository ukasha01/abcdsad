const mongoose = require('mongoose')
<<<<<<< HEAD
=======
const { populate, findByIdAndUpdate } = require('../models/order')
>>>>>>> 4d6dcf8 (7/28/22)


const order = require('../models/order')
const orderItem = require('../models/orderItem')

createOrder = async (req, res) => {
    const { orderitems, shippingAddress, city, country,
        zip, phone, status,
<<<<<<< HEAD
        totalPrice, user, dateOrder, ljkslakj } = req.body

    try {

        
        const createOrder = await order.create({
            orderitems, shippingAddress, city, country,
=======
        user, dateOrder } = req.body
    try {
        const orderItemsid = Promise.all(orderitems.map(async orderItems => {
            console.log(orderitems)
            const newOrderItem = await orderItem.create({
                quantity: orderItems.quantity,
                product: orderItems.product
            })
            // console.log(newOrderItem._id)
            return newOrderItem._id
        }))
        const orderitemsidResolved = await orderItemsid
        console.log()
        const totalPrices = await Promise.all(orderitemsidResolved.map(async orderItemId => {
            const orderItems = await orderItem.findById(orderItemId).populate('product')
            const totalprice = orderItems.product.price * orderItems.quantity
            return totalprice
        }))
        const totalPrice = totalPrices.reduce((a, b) => a + b, 0)
        const createOrder = await order.create({
            orderitems: orderitemsidResolved,
            shippingAddress, city, country,
>>>>>>> 4d6dcf8 (7/28/22)
            zip, phone, status,
            totalPrice, user, dateOrder
        })
        res.status(201).send(createOrder)
    }
    catch (e) {
        res.status(404).json({
            success: false,
<<<<<<< HEAD
            message: e.message
=======
            message: e.stack
>>>>>>> 4d6dcf8 (7/28/22)
        })
    }

}
getOrder = async (req, res) => {
<<<<<<< HEAD

}
getSpecificOrder = async (req, res) => {

}
deleteOrder = async (req, res) => {

}
updateOrder = async (req, res) => {

}
=======
    try {
        const allOrder = await order.find({}).populate("user", "name")
            .sort({ "dateOrder": -1 })
        console.log(allOrder)
        res.status(200).send(allOrder)
    }
    catch (e) {
        res.status(404).json({
            success: false,
            message: e.message
        })
    }
}
getSpecificOrder = async (req, res) => {
    try {
        const myOrder = await order.findById(req.params.id)
            .populate('user', 'name')
            .populate({ path: 'orderitems', populate: { path: 'product', populate: 'category' } })
        res.status(200).send(myOrder)

    }
    catch (e) {
        res.status(404).json({
            success: false,
            message: e.message
        })
    }
}
deleteOrder = (req, res) => {

    order.findByIdAndRemove(req.params.id).then(async orderId => {
        console.log(orderId)
        if (orderId) {
            await orderId.orderitems.map(async orderitem => {
                await orderItem.findByIdAndRemove(orderitem)
            })
            return res.status(200).json({ success: true, message: "successfully deleted" })
        }
        else {
            return res.status(404).json({ success: false, message: "order not found" })

        }
    }).catch(err =>
        res.status(500).json({ success: false, message: err.message }))

}
updateOrder = async (req, res) => {
    let { status } = req.body
    try {
        const myorder = await order.findByIdAndUpdate(req.params.id
            ,
            {
                status,
            }
        )
        if (!myorder) {
            res.status(404).send({ success: false, message: "order not Found" })

        }
        else {
            res.status(200).send({ success: true, message: "order Status updated" })

        }
    }
    catch (err) {
        res.status(400).send(err.message)
    }

}
getSale = async (req, res) => {
    try {
        const totalsale = await order.aggregate([
            { $group: { _id: null, totalsales: { $sum: "$totalPrice" } } }
        ])
        res.status(200).send({ success: true, totalsale: totalsale.pop().totalsales })
    }
    catch (e) {
        res.status(400).send({ success: false, messagee: e.stack })
    }
}
orderCount = async (req, res) => {
    try {
        const countOreder = await order.countDocuments({})
        res.status(200).json({ success: true, countOrder: countOreder })
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}

>>>>>>> 4d6dcf8 (7/28/22)
module.exports = {
    createOrder,
    getOrder,
    getSpecificOrder,
    updateOrder,
    deleteOrder,
<<<<<<< HEAD
=======
    getSale,
    orderCount,
>>>>>>> 4d6dcf8 (7/28/22)

}