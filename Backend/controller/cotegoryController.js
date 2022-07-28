const cataegories = require("../models/cataegories")

getCatageory = async (req, res) => {
    try {
        const catageoryList = await cataegories.find()
        if (!catageoryList) {
            res.status(500).json({ success: false })
        }
        res.send(catageoryList)
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}
getSpecificCategory = async (req, res) => {
    try {
        const category = await cataegories.findById(req.params.id)
        if (!category) {
            res.status(404).json({ success: false, message: `the given ${req.params.id} not found` })

        }

        res.status(200).send(category)
    }
    catch (err) {
        res.status(400).json(err)
    }

}
addCategory = async (req, res) => {
    const { name, icon, color } = req.body
    console.log(req)
    try {
        const add_category = await cataegories.create({
            name, icon, color
        })
        res.status(201).send(add_category)
    }
    catch (e) {
        res.status(404).json({
            success: false,
            message: e.message
        })
    }
}
const updateCategory = async (req, res) => {
    const { name, icon, color } = req.body
    try {
        const updateCategory = await cataegories.findOneAndUpdate(req.params.id,
            {
                name, icon, color
            })
        res.status(200).json({
            success: true,
            message: "catageory successfully updated",
            data: updateCategory
        })
    }
    catch (err) {
        res.status(404).send({
            success: false,
            message:err
        })
    }
}
deletCategory = async (req, res) => {
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

module.exports = {
    getCatageory,
    addCategory,
    deletCategory,
    getSpecificCategory,
    updateCategory
}