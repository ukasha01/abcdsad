const express =  require('express')
const router = express.Router()
const authjwt = require('../helper/jwt')

const catageoryList = require('../controller/cotegoryController')
router.get('/category' ,authjwt ,catageoryList.getCatageory)
<<<<<<< HEAD
router.post('/add_category' ,authjwt, catageoryList.addCategory)
=======
router.post('/add_category' , catageoryList.addCategory)
>>>>>>> 4d6dcf8 (7/28/22)
router.delete('/delet_category' , authjwt,catageoryList.getCatageory)
router.put('/update_category' , authjwt,catageoryList.updateCategory)
module.exports = router 