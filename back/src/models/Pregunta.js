/**
   *
   * @author Juanfran 
*/

/* La clase Pregunta es un modelo para crear objetos que tienen una propiedad de pregunta y respuesta. */
class Pregunta {

    constructor(pregunta, respuesta){
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }

    getPregunta = () => {
        return this.pregunta;
    }

    getRespuesta = () => {
        return this.respuesta;
    }

    setPregunta = (pregunta) => {
        this.pregunta = pregunta;
    }

    setRespuesta = (respuesta) => {
        this.respuesta = respuesta;
    }

};

module.exports = Pregunta;