const express = require('express')
const router = express.Router()
const category = require("./cataegories")
const order = require("./order")
const user = require("./user")
const product = require("./product")
require("dotenv/config")
router.use(process.env.API_URL , category)
router.use(process.env.API_URL , order)
router.use(process.env.API_URL , user)
router.use(process.env.API_URL , product)


 
 




module.exports = router 