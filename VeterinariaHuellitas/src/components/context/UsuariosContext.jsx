import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoUsuarios = createContext();

const UsuariosContext = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);

    //GET

    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get("http://localhost:8080/usuarios");
            setUsuarios(response.data);
            console.log(usuarios);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    //PUT

    const editarUsuarios = async (usuario) => {
        try {
            await axios.put(`http://localhost:8080/usuarios/${usuario.id}`, usuario);
            await obtenerUsuarios();
        } catch (error) {
            console.log(error)

        }

    };

    //DELETE

    const eliminarUsuarios = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/usuarios/${id}`);
            const eliminarUsuarios = usuarios.filter((usuario) => usuario.id !== id);
            setTurnos(eliminarUsuarios)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <ContextoUsuarios.Provider value={{ obtenerUsuarios, editarUsuarios, eliminarUsuarios, usuarios }}>
                {children}
            </ContextoUsuarios.Provider>
        </>
    );
};

export default UsuariosContext;