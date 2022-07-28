const express = require('express')
const router = express.Router()
const authjwt = require('../helper/jwt')
const product = require("../controller/productCotroller")
<<<<<<< HEAD
router.get("/get_product", authjwt, product.getProduct)
router.get("/get_product/:id", authjwt,product.getSpecificProduct)
router.post("/add_product", authjwt,product.add_product)
=======
const multer = require('multer')
const FILE_TYPE_MAP ={
    "image/png":'png',
    "image/jpeg":'jpeg',
    "image/jpg":'jpg',
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype]
        let uploadError = new Error('invalid image')
        if(isValid){
            uploadError = null
        }
        cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const filename = file.originalname.split(' ').join("-")
        const extension = FILE_TYPE_MAP[file.mimetype]
        cb(null, `${filename}-${Date.now()}.${extension}`)
    }
})

const uploadOption = multer({ storage: storage })
console.log(uploadOption.single)
router.get("/get_product", authjwt, product.getProduct)
router.get("/get_product/:id", authjwt,product.getSpecificProduct)
router.post("/add_product", uploadOption.single('frontImage'),product.add_product)
>>>>>>> 4d6dcf8 (7/28/22)
router.delete("/delet_product", authjwt,product.deletProduct)
router.put("/update_product", authjwt,product.updateProduct)
router.get("/product_count", authjwt,product.productCount)
router.get("/feature_product/:count", authjwt,product.getFeatureProduct)
router.get("/product",authjwt, product.filteProduct)
<<<<<<< HEAD
=======
router.put("/gallery-image/:id", uploadOption.array('images' , 10),product.setGalleryImage)
>>>>>>> 4d6dcf8 (7/28/22)


module.exports = router 