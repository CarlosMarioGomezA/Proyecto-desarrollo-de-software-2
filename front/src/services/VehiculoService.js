import axios from 'axios';

/**
 * @author Juanfran
 */

class VehiculoService {

    constructor() {
        this.baseURL = 'http://localhost:3000/';
    }

    /* Una función que toma el token del almacenamiento local y lo devuelve. */
    tomaToken = () => {
        let token = localStorage.getItem('token');
        if (token) {
            return { 'Authorization': 'Bearer ' + token }
        }
    }

    /**
     * Toma un objeto de vehículo, lo envía al servidor y devuelve la respuesta del servidor.
     * @param vehiculo - {
     * @returns La respuesta del servidor.
     */
    async crearVehiculo(vehiculo) {
        let array = await axios.post(this.baseURL + 'vehiculos', vehiculo, {headers: this.tomaToken()});
        return array;
    }

    /**
     * Toma un objeto de vehículo como parámetro y devuelve una matriz de objetos.
     * @param vehiculo - {
     * @returns Una matriz de objetos.
     */
    async obtenerVehiculo(vehiculo) {
        let array = await axios.get(this.baseURL + 'vehiculos/'+ vehiculo.placa, {headers: this.tomaToken()});
        return array;
    }

}

export default VehiculoService;