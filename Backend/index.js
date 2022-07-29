const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const mongoose = require("mongoose")
const mainRouter = require("./routers/index")
const authjwt = require('./helper/jwt')
const errorHandler = require('./helper/errorhandler')

// middleware 

app.use(bodyParser.json())

app.use(morgan('tiny'))
app.use(mainRouter)
app.use(errorHandler)
// app.use(authjwt)
require("dotenv/config")
const api = process.env.API_URL

// db connection
mongoose.connect(process.env.DA_LINK ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("database connetion is ready....")
})
.catch(err => console.log(err.message))
app.get(`${api}/product `  , (req , res)=>{
    console.log("ukasha")
})
app.listen(process.env.PORT || 3000 , ()=>{
     console.log("server is running on http://localhost:3000")
})
// console.log("hello")