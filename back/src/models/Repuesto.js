/**
   *
   * @author Juanfran 
*/

class Repuesto{

    constructor(codigo, referencia, marca, costo, vidaUtil, tipo){
        this.codigo = codigo;
        this.referencia = referencia;
        this.marca = marca;
        this.costo = costo;
        this.vidaUtil = vidaUtil;
        this.tipo = tipo;
    }

    getCodigo(){
        return this.codigo;
    }

    getReferencia(){    
        return this.referencia;
    }

    getMarca(){
        return this.marca;
    }

    getCosto(){
        return this.costo;
    }

    getVidaUtil(){
        return this.vidaUtil;
    }

    getTipo(){
        return this.tipo;
    }

    setCodico(codigo){
        this.codigo = codigo;
    }

    setReferencia(referencia){
        this.referencia = referencia;
    }

    setMarca(marca){
        this.marca = marca;
    }

    setCosto(costo){
        this.costo = costo;
    }

    setVidaUtil(vidaUtil){
        this.vidaUtil = vidaUtil;
    }

    setTipo(tipo){
        this.tipo = tipo;
    }

}

module.exports = Repuesto;