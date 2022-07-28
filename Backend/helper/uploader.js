let cloudinary = require('cloudinary').v2;
require("dotenv/config")
cloudinary.config({
    cloud_name: process.env.CLOUD_NMAE,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET_KEY,
});
module.exports = cloudinary  
