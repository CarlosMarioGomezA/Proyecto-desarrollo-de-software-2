const mysql = require("mysql");
const bd = require("./bd");

const conexion = mysql.createConnection(bd); 

conexion.connect((err)=>{
    if(!!err){
        console.log(err);
    }else{
        console.log("Conexión exitosa a la BD");
    }
})

module.exports = conexion;
