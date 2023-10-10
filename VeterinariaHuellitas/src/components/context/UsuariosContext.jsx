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
            const response = await axios.get("http://localhost:8080/api/usuarios")
            setUsuarios(response.data);
            console.log(response.data)
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
            await axios.post("http://localhost:8080/api/usuario", usuario);

            setUsuarios([...usuarios, usuario])
            console.log(usuario)
        } catch (error) {
            console.log(error)
        }
    };

    //PUT

    const modificarUsuario = async (usuario) => {
        try {
            await axios.put(`http://localhost:8080/api/usuarios/${usuario._id}`, usuario);
            await obtenerUsuarios();
        } catch (error) {
            console.log(error)
        }
    };

    //DELETE

    const eliminarUsuario = async (id) => {

        try {
            await axios.delete(`http://localhost:8080/api/usuario/${id}`);
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

            const response = await axios.post("http://localhost:8080/api/login", {
                correo,
                password,
            });
            // console.log(response.data);
            const jwtToken = response.data.data.token
            const jwtDecode = jwt_decode(jwtToken)

            console.log(jwtDecode)

            localStorage.setItem("usuario", jwtToken);
            setUsuarioLogueado(jwtDecode)

            console.log("Ingresado")

            if (jwtDecode.rol === "admin") {
                window.location.href = "/administracion";
            } else {
                window.location.href = "/";
            }
        } catch (error) {
            console.log(error)
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