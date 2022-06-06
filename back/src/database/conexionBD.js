const mysql = require("mysql");
const bd = require("./bd");

/**
   *
   * @author Juanfran 
*/

/* Creando una clase llamada ConexionBD. */
class ConexionBD{

   static pool = null;
   
   /**
    * Si la instancia no está definida, créela y devuélvala. Si está definida, devuélvela.
    * @returns El objeto de conexión.
    */
   static getPool(){
      if(!ConexionBD.pool){
         ConexionBD.pool = mysql.createPool(bd);
         return ConexionBD.pool; 
      }
      return ConexionBD.pool;
   }
}


module.exports = ConexionBD;
