const product = require('../models/product')
const cataegories = require("../models/cataegories")
const { find } = require('../models/cataegories')
const cloudinary = require('../helper/uploader')
getProduct = async (req, res) => {
    try {
        const ProductList = await product.find().populate('category')
        if (!ProductList) {
            res.status(500).json({ success: false })
        }
        res.send(ProductList)
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}
getSpecificProduct = async (req, res) => {
    try {
        const product = await product.findById(req.params.id).populate('category')
        if (!product) {
            res.status(404).json({ success: false, message: `the given ${req.params.id} not found` })

        }

        res.status(200).send(category)
    }
    catch (err) {
        res.status(400).json(err)
    }

}
add_product = async (req, res) => {
    const { name, description, richDescription, images, brand, price, category, inStock, numOfReviews, rating, isFeatured } = req.body
    const filePath = req.file.path
    // console.log(filename.path)
    // const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`
    try {
        const catageory = await cataegories.findById(category)
        if (!catageory) return res.status(400).send("invalid category")
        let imgPath = await cloudinary.uploader.upload(filePath, {
            folder: "product image"
        })
        console.log(imgPath)
        const add_product = await product.create({
            name, description, richDescription,
            frontImage: imgPath.secure_url,
            images,
            brand, price, category: catageory, inStock, numOfReviews, rating, isFeatured
        })
        res.status(201).send(add_product)
    }
    catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}
const updateProduct = async (req, res) => {
    const { name, description, richDescription, frontImage, images, brand, price, category, inStock, numOfReviews, rating, isFeatured } = req.body
    try {
        const catageory = await cataegories.findById(category)

        const updateProduct = await product.findOneAndUpdate(req.params.id,
            {
                name, description, richDescription, frontImage, images,
                brand, price, category: catageory, inStock, numOfReviews, rating, isFeatured
            })
        res.status(200).json({
            success: true,
            message: "product successfully updated",
            data: updateProduct
        })
    }
    catch (err) {
        res.status(404).send({
            success: false,
            message: err.message
        })
    }
}
deletProduct = async (req, res) => {
    try {
        const catageoryList = await cataegories.findOneAndRemove(req.params.id)
        console.log(catageoryList)
        if (!catageoryList) {
            res.status(200).json({ success: true, message: `succesfully deleted` })
        }
        else {
            res.status(404).json({ success: false, message: `not found` })
        }
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}
productCount = async (req, res) => {
    try {
        const countProduct = await product.countDocuments({})
        res.status(200).json({ success: true, count: countProduct })
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}
getFeatureProduct = async (req, res) => {
    const count = req.params.count ? req.params.count : 0
    try {
        const featureProduct = await product.find({ isFeatured: true }).limit(count)
        res.status(200).send(featureProduct)
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}
filteProduct = async (req, res) => {
    try {
        let filter = []
        if (req.query.catageory) {
            filter = req.query.catageory.split(",")
        }
        const ProductList = await profind({ catageory: req.query.catageory }).populate('category')
        res.status(200).send(ProductList)

    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }

}
setGalleryImage = async (req, res) => {
    const file = req.files
    console.log()
    // const basePath = `${req.protocol}://${req.get('host')}/public/upload/`
    let imagesPaths = []


    try {
        if (file) {
            for (const  files of file) {
                const { path } = files;
                let imgPath = await cloudinary.uploader.upload(path, {
                    folder: "image Gallery"
                })
                await imagesPaths.push(imgPath.secure_url)

            }
            //   file.map(async file => {
            //         let imgPath =  await cloudinary.uploader.upload(file.path,{
            //             folder:"image Gallery"
            //         })
            //         imagesPaths.push(imgPath.secure_url)

            //     });
        }
        const products = await product.findByIdAndUpdate(req.params.id
            ,
            {
                images: imagesPaths
            },
            { new: true }
        )
        res.status(200).send({
            success: true,
            products,
        })
    }
    catch (e) {
        res.status(404).send({
            success: false,
            message: "the product not found"
        })
    }
}

module.exports = {
    getProduct,
    add_product,
    deletProduct,
    getSpecificProduct,
    updateProduct,
    productCount,
    getFeatureProduct,
    filteProduct,
    setGalleryImage
}
