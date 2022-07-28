const authModel = require('../models/user')
const bcrypt = require("bcryptjs")
const { getSpecificCategory } = require('./cotegoryController')
const jwt = require('jsonwebtoken')
signUpData = async (req, res) => {
    const { name, email, password, phone, country, city, isAdmin } = req.body
    try {
        const checkUser = await authModel.findOne({ "email": email })
        if (checkUser) {
            return res.status(200).send({ success: false, message: "already registered" })
        }
        else {

            const hashPass = await bcrypt.hash(password, 12)

            const userCreate = await new authModel(
                {
                    name,
                    email,
                    password: hashPass,
                    phone, country, city, isAdmin



                })
            userCreate.save()
                .then((response) => {
                    console.log(response)
                    return res.status(200).send({
                        success: true,
                        message: "Successfully Registered"
                    })

                })
                .catch((err) => {
                    return res.status(404).send({
                        success: false,
                        message: err.message
                    })
                })
        }
    }

    catch (e) {
        return res.status(400).send({ success: false, message: e.message }
        )
    }
}
getUser = async (req, res) => {
    try {
        const userList = await authModel.find({}).select('-password')
        const userCount = await authModel.countDocuments({})
        if (!userList && !userCount) {
            res.status(404).send("users not Found")
        }
        res.status(200).send({
            success: true,
            userList, userCount
        })



    }
    catch (err) {
        return res.status(400).send({ success: false, message: err.message })
    }
}

getSpecificsUser = async (req, res) => {
    try {
        const userList = await authModel.findById(req.params.id).select('-password')

        // const userCount = await authModel.countDocuments({})
        if (!userList) {
            res.status(404).send("users not Found")
        }
        res.status(200).send({
            success: true,
            userList
        })



    }
    catch (err) {
        return res.status(400).send({ success: false, message: err.message })
    }
}
logInData = async (req, res) => {
    const { email, password } = req.body
    const secret  = process.env.SECRET
    console.log(secret)
    try {
        const checkUser = await authModel.findOne({ "email": email })
        
        let dbPass = checkUser.password

        let comparePass = await bcrypt.compare(password, dbPass)
        if (checkUser && comparePass) {
            const token = jwt.sign(
                {
                    userID : checkUser.id,
                    isAdmin  : checkUser.isAdmin
                },secret,{expiresIn:'1d'}
            )
            res.status(200).send({ success: true, message: "user Seccesfully login", data:checkUser , token, })
        }
        else {
            res.status(200).send({ success: false, message: "user email or passWord incorrect" })

        }
    }
    catch (err) {
        res.status(500).send({ success: false, message:err.message })
    }
}
module.exports = {
    signUpData, getUser, getSpecificsUser,logInData,
}