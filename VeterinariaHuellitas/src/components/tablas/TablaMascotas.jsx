import { useContext, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { ContextoMascotas } from "../context/MascotasContext";
import FormEditarMascotas from "../turnos/FormEditarMascotas";
import Swal from "sweetalert2";
import "./estiloTablas.css";

const TablaMascotas = () => {
    const { mascotas, eliminarMascotas } = useContext(ContextoMascotas);

    const [edicionMascota, setEdicionMascota] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (mascota) => {
        setEdicionMascota(mascota);
        handleShow();
    };

    const handleDelete = (id) => {
        eliminarMascotas(id);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Mascota eliminada",
        });
    };

    return (
        <>
            <div className="contenedorAdmin">

                <h1 className="d-flex justify-content-center">Mascotas</h1>
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
                                <th>Sexo</th>
                                <th>Edad</th>
                                <th>Especie</th>
                                <th>Raza</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {mascotas.map((mascota) => (
                                <tr className="columnaAdmin" key={mascota.id}>
                                    <td></td>
                                    <td data-label="Nombre">{mascota.nombre}</td>
                                    <td data-label="Sexo">{mascota.sexo} </td>
                                    <td data-label="Edad">{mascota.edad}</td>
                                    <td data-label="Especie">{mascota.especie}</td>
                                    <td data-label="Raza">{mascota.raza}</td>
                                    <td>
                                        <Button
                                            className="botonEditarAdmin me-2"
                                            onClick={() => handleEdit(mascota)}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="botonEliminarAdmin"
                                            onClick={() => handleDelete(mascota.id)}
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
                                MODIFICAR MASCOTA
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bodyModalEdiAdmin">
                            <FormEditarMascotas
                                edicionMascota={edicionMascota}
                                handleClose={handleClose}
                            />{" "}
                        </Modal.Body>
                    </Modal>
                </div>
            </div>

        </>
    );
};

export default TablaMascotas;