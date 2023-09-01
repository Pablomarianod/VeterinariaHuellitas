import { useContext, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { ContextoTurnos } from "../context/TurnosContext";
import FormEditarTurnos from "../turnos/FormEditarTurnos";
import Swal from "sweetalert2";
import "./estiloTablas.css";

const TablaTurnos = () => {
  const { turnos, eliminarTurnos } = useContext(ContextoTurnos);

  const [edicionTurno, setEdicionTurno] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (turno) => {
    setEdicionTurno(turno);
    handleShow();
  };

  const handleDelete = (id) => {
    eliminarTurnos(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Turno eliminado",
    });
  };

  return (
    <>
      <div className="contenedorAdmin">

        <h1 className="d-flex justify-content-center">Turnos</h1>
        <div className="contenedorTablaAdmin">
          <Table
            responsive
            striped
            className="table-hover text-center table-dark tablaAdmin"
          >
            <thead>
              <tr className="filaAdmin">
                <th></th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Plan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <tr className="columnaAdmin" key={turno.id}>
                  <td></td>
                  <td data-label="Fecha">{turno.fecha}</td>
                  <td data-label="hora">{turno.hora} </td>
                  <td data-label="plan">{turno.plan}</td>
                  <td>
                    <Button
                      className="botonEditarAdmin me-2"
                      onClick={() => handleEdit(turno)}
                    >
                      Editar
                    </Button>
                    <Button
                      className="botonEliminarAdmin"
                      onClick={() => handleDelete(turno.id)}
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
                MODIFICAR TURNO
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bodyModalEdiAdmin">
              <FormEditarTurnos
                edicionTurno={edicionTurno}
                handleClose={handleClose}
              />{" "}
            </Modal.Body>
          </Modal>
        </div>
      </div>

    </>
  );
};

export default TablaTurnos;
