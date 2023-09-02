import axios from 'axios'

const API = "http://localhost:8080/api";

export const registerRequest = (user) => axios.post(`${API}/registro`, user) //Api + la ruta de la pagina, debo ver las rutas en App, en nuestro proyecto es una carpeta aparte
/*La ruta que va en el /nombreDeRuta TIENE QUE COINCIDIR CON ALGUNA EN EL BACK */

export const loginRequest = (user) => axios.post(`${API}/login`, user)
