function errorHandler (err , req,res,next){
    if (err.name == "UnauthorizedError"){
        return res.status(401).json({message: "this user is not authorized"})
    }
    if(err.name === "ValidationError"){
        return res.status(401).json({message: err})

    }
<<<<<<< HEAD
    return res.status(500).json({message:err.message ,nmae:err.name , })
=======
    return res.status(500).json({message:err.message , err:err.stack  })
>>>>>>> 4d6dcf8 (7/28/22)
}
module.exports = errorHandler