import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const ContextoUsuarios = createContext();

const UsuariosContext = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioLogueado, setUsuarioLogueado] = useState([])

    //GET

    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get("https://huellitas-back-9sgs.onrender.com/api/usuarios")
            setUsuarios(response.data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        obtenerUsuarios()
    }, []);

    //POST

    const registrarUsuario = async (usuario) => {
        try {
            await axios.post("https://huellitas-back-9sgs.onrender.com/api/usuario", usuario);

            setUsuarios([...usuarios, usuario])
            
        } catch (error) {
            console.log(error)
        }
    };

    //PUT

    const modificarUsuario = async (usuario) => {
        try {
            await axios.put(`https://huellitas-back-9sgs.onrender.com/api/usuario/${usuario._id}`, usuario);
            await obtenerUsuarios();
        } catch (error) {
            console.log(error)
        }
    };

    //DELETE

    const eliminarUsuario = async (id) => {

        try {
            await axios.delete(`https://huellitas-back-9sgs.onrender.com/api/usuario/${id}`);
            const eliminarUsuario = usuarios.filter((usuario) => usuario.id !== id);
            setUsuarios(eliminarUsuario);
            await obtenerUsuarios();
        } catch (error) {
            console.log(error)
        }
    };

    //Login

    const login = async (correo, password) => {
        try {
            const response = await axios.post("https://huellitas-back-9sgs.onrender.com/api/login", {
                correo,
                password,
            });
            const jwtToken = response.data.data.token
            const jwtDecode = jwt_decode(jwtToken)

            console.log(jwtDecode)

            const usuario = {
                id: jwtDecode.id,
                nombre: jwtDecode.nombre,
                apellido: jwtDecode.apellido,
                correo: jwtDecode.correo,
                password: jwtDecode.password,
                rol: jwtDecode.rol,
            };

            localStorage.setItem("usuario", JSON.stringify(usuario));
            setUsuarioLogueado(usuario);

            if (usuario.rol === "admin") {
                window.location.href = "/administracion";
            } else {
                window.location.href = "/";
            }
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const logOut = () => {
        localStorage.removeItem("usuario")
        window.location.href = "/"
    }

    return (
        <>
            <ContextoUsuarios.Provider value={{ obtenerUsuarios, registrarUsuario, modificarUsuario, eliminarUsuario, usuarios, setUsuarios, login, usuarioLogueado, logOut }}>
                {children}
            </ContextoUsuarios.Provider>
        </>
    );
};

export default UsuariosContext;