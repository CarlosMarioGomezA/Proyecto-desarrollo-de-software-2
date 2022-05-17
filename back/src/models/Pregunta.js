
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