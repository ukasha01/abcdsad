const mongoose = require('mongoose')


const catageorySchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    icon:{
        type:String 
    },
    color:{
        type:String
    }
})
const catageoryModel =  mongoose.model("Catageory" , catageorySchema)
module.exports = catageoryModel