console.log("config loadded...")
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});


module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3002,
    DB_URL: process.env.DB_URL || 'mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/sdp_hr_app_dev',
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
}