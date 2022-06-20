/**
   *
   * @author Juanfran 
*/

class Documento{

    constructor(nroDocumento, tipoDocumento, costo, fecha){
        this.nroDocumento = nroDocumento;
        this.tipoDocumento = tipoDocumento;
        this.costo = costo;
        this.fecha = fecha;
    }

    getNroDocumento(){
        return this.nroDocumento;
    }

    getTipoDocumento(){
        return this.tipoDocumento;
    }

    getCosto(){
        return this.costo;
    }   

    getFecha(){
        return this.fecha;
    }

    setNroDocumento(nroDocumento){
        this.nroDocumento = nroDocumento;
    }

    setTipoDocumento(tipoDocumento){
        this.tipoDocumento = tipoDocumento;
    }

    setCosto(costo){
        this.costo = costo;
    }   

    setFecha(fecha){
        this.fecha = fecha;
    }

}

module.exports = Documento;