const express = require('express')
const authjwt = require('../helper/jwt')
const router = express.Router()
const auth = require('../controller/authController')
router.post("/add_user",authjwt, auth.signUpData)
router.get("/users", authjwt,auth.getUser)
router.get("/users/:id", authjwt,auth.getSpecificsUser)
router.post("/logIn_user",authjwt, auth.logInData)

module.exports = router 