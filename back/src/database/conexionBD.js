const mysql = require("mysql");
const bd = require("./bd");

const conexion = mysql.createConnection(bd); 


module.exports = conexion;
