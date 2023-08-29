import { useContext, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { ContextoUsuarios } from "../context/UsuariosContext";
import FormEditarUsuarios from "../turnos/FormEditarUsuarios";
import Swal from "sweetalert2";
import "./estiloTablas.css";

const TablaUsuarios = () => {
    const { usuarios, eliminarUsuarios } = useContext(ContextoUsuarios);

    const [edicionUsuario, setEdicionUsuario] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (usuario) => {
        setEdicionUsuario(usuario);
        handleShow();
    };

    const handleDelete = (id) => {
        eliminarUsuarios(id);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario eliminado",
        });
    };

    return (
        <>
            <div className="contenedorAdmin">

                <h1 className="d-flex justify-content-center">Usuarios</h1>

                <div className="contenedorTablaAdmin">
                    <Table
                        responsive
                        striped
                        className="table-hover text-center table-dark tablaAdmin"
                    >
                        <thead>
                            <tr className="filaAdmin">
                                <th></th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Contraseña</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr className="columnaAdmin" key={usuario.id}>
                                    <td></td>
                                    <td data-label="Nombre">{usuario.nombre}</td>
                                    <td data-label="Apellido">{usuario.apellido} </td>
                                    <td data-label="Correo">{usuario.correo}</td>
                                    <td data-label="Telefono">{usuario.telefono}</td>
                                    <td data-label="Contraseña">{usuario.contraseña}</td>
                                    <td>
                                        <Button
                                            className="botonEditarAdmin me-2"
                                            onClick={() => handleEdit(usuario)}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="botonEliminarAdmin"
                                            onClick={() => handleDelete(usuario.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="contenedorModalEdiAdmin">
                    <Modal
                        className="modalEditarAdmin"
                        centered
                        show={show}
                        onHide={handleClose}
                    >
                        <Modal.Header className="headerModalEdiAdmin" closeButton>
                            <Modal.Title className="tituloModalEdiAdmin">
                                MODIFICAR USUARIO
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bodyModalEdiAdmin">
                            <FormEditarUsuarios
                                edicionUsuario={edicionUsuario}
                                handleClose={handleClose}
                            />{" "}
                        </Modal.Body>
                    </Modal>
                </div>
            </div>

        </>
    );
};

export default TablaUsuarios;
