import { useContext, useState } from "react";
import { ContextoTurnos } from "../Context/TurnosContext";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import "./FormEdit.css";

const FormEditarTurnos = ({ handleClose, edicionTurno }) => {
  const [turno, setTurno] = useState(edicionTurno);
  const { modificarTurno } = useContext(ContextoTurnos);

  const handleChange = (e) => {
    setTurno({ ...turno, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    modificarTurno(turno);
    Swal.fire({
      title: "Turno editado correctamente",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
    handleClose();
  };

  return (
    <>
      <form onSubmit={handleEdit}>
        <label htmlFor="fecha" className="labelFecha form-label">
          Fecha
        </label>
        <input
          type="date"
          name="fecha"
          value={turno.fecha}
          onChange={handleChange}
          className="inputFecha form-control mb-2"
          required
        ></input>
        <label htmlFor="hora" className="labelHora form-label">
          Hora
        </label>
        <input
          type="time"
          name="hora"
          value={turno.hora}
          onChange={handleChange}
          className="inputHora form-control mb-2"
          required
        ></input>
        <label htmlFor="plan" className="labelPlan form-label">
          Plan
        </label>
        <select
          className="inputPlan form-select mb-3"
          name="plan"
          value={turno.plan}
          onChange={handleChange}
          required
        >
          <option value="">Tipo de plan</option>
          <option>Primeros pasos</option>
          <option>Madurando</option>
          <option>Adultos</option>
        </select>
        <Button type="submit" className="botonEditarForm">
          EDITAR
        </Button>
        <Button onClick={handleClose} className="botonEditarForm">
          CANCELAR
        </Button>
      </form>
    </>
  );
};

export default FormEditarTurnos;