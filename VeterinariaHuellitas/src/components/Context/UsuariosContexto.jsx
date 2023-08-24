import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { registerRequest, loginRequest  } from '../helpers/query.js';
/*import { useNavigate} from "react-router-dom";*/


export const UsuarioContexto = createContext(); 

/*const navegacion = useNavigate();*/ /*PROBAR si es necesaria la navegacion, ya que usamos modal, bastaria con solo cerrar el modal? ver si cambia algo con el navbar */

export const usarUsuContext = () => {
    const contexto = useContext(UsuarioContexto);
    if(!contexto){
        throw new Error(" usarUsuContext debe estar dentro de un UsuarioProvider")
    }
    return contexto;
}

const UsuariosContexto = ({children}) => {
    const[usuario, setUsuario] = useState();
    /*const {autentificado, setAutentificado} = useState(false); /*Solo no sirve para saber si el usuario esta autentificado */
    const [errorRegistro, setErrorRegistro] = useState([]);
    const [errorLogin, setErrorLogin] = useState([]);

    /*
    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuarios")
            console.log(response.data)
            setUsuario(response.data) 
        } catch (error) {
            console.log(error)
        }
    }
    */

    const registrar = async (user) => {
        try {
            const response = await registerRequest(user);
            console.log(response.data)
            setUsuario(response.data)
        } catch (error) {
            setErrorRegistro(error.response.data)
        }
    }

    const login = async (user) => {
        try {
            const response = await loginRequest(user)
            console.log(response)
        } catch (error) {
            setErrorLogin(error.response.data);
        }
    }

    const logOut = () =>{
        localStorage.remove("usuario");
        window.location.href = "/" /*poner ruta del HOME aqui*/
    }

    /*
    useEffect(() => {
        
    }, [])*/

    return (
        <UsuarioContexto.Provider value={{usuario, setUsuario, logOut, login, errorLogin, registrar, errorRegistro}}> 
          {children}  
        </UsuarioContexto.Provider>
    );
}

export default UsuariosContexto;