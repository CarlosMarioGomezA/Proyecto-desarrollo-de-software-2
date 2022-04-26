require('dotenv').config();

module.exports = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    // port: process.env.PUERTO,
    database: process.env.DATABASE
}