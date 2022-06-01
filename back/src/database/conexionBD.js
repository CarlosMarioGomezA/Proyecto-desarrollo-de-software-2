const mysql = require("mysql");
const bd = require("./bd");

/**
   *
   * @author Juanfran 
*/

const conexion = mysql.createConnection(bd); 


module.exports = conexion;
