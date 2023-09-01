import { useContext, useState } from "react";
import { ContextoUsuarios } from "../context/UsuariosContext";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
// import './modalusuarios.css' importar el formulario de registro

const FormEditarUsuarios = ({ handleClose, edicionUsuario }) => {
    const [usuario, setUsuario] = useState(edicionUsuario);
    const { editarUsuarios } = useContext(ContextoUsuarios);

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        editarUsuarios(usuario);
        Swal.fire({
            title: "Usuario editado correctamente",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
        });
        handleClose();
    };

    return (
        <>
            <form onSubmit={handleEdit}>
                <label htmlFor="nombre" className="labelNombre form-label">
                    Nombre
                </label>
                <input
                    type="string"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                    className="inputNombre form-control mb-2"
                    required
                ></input>

                <label htmlFor="apellido" className="labelApellido form-label">
                    Apellido
                </label>
                <input
                    type="string"
                    name="apellido"
                    value={usuario.apellido}
                    onChange={handleChange}
                    className="inputApellido form-control mb-2"
                    required
                ></input>

                <label htmlFor="correo" className="labelCorreo form-label">
                    Correo
                </label>
                <input
                    type="email"
                    name="correo"
                    value={usuario.correo}
                    onChange={handleChange}
                    className="inputCorreo form-control mb-2"
                    required
                ></input>

                <label htmlFor="telefono" className="labelTelefono form-label">
                    Telefono
                </label>
                <input
                    type="number"
                    name="telefono"
                    value={usuario.telefono}
                    onChange={handleChange}
                    className="inputTelefono form-control mb-2"
                    required
                ></input>

                <label htmlFor="contraseña" className="labelContraseña form-label">
                    Contraseña
                </label>
                <input
                    type="string"
                    name="contraseña"
                    value={usuario.contraseña}
                    onChange={handleChange}
                    className="inputContraseña form-control mb-2"
                    required
                ></input>

                <Button type="submit" className="botonModalUsuarios">
                    EDITAR
                </Button>
            </form>
        </>
    );
};

export default FormEditarUsuarios;