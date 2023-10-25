import "./modalTurnos.css";
import { useState, useRef, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const ModalTurnos = ({ handleClose }) => {

  const usuario = JSON.parse(localStorage.getItem("usuario"))

  const [formTurnos, setFormTurnos] = useState({
    nombre: usuario.nombre,
    correo: usuario.correo,
    fecha: "",
    hora: "",
    plan: ""
  });

  const [validaFecha, setValidaFecha] = useState("");
  const [validaHora, setValidaHora] = useState("");
  const [planElegido, setPlanElegido] = useState("");

  const handleChange = (e) => {

    setFormTurnos({ ...formTurnos, [e.target.name]: e.target.value });
  };

  const handleBlurFecha = (e) => {
    if (e.target.name === "fecha") {
      const fecha = new Date(e.target.value);
      const fechaActual = new Date();

      fecha.setHours(0, 0, 0, 0);
      fechaActual.setHours(0, 0, 0, 0);

      if (fecha.getTime() < fechaActual.getTime()) {
        setValidaFecha(
          "Los turnos se programan con al menos 24hs de anticipacion"
        );
      } else {
        setValidaFecha("");
      }
    }
  };

  const handleBlurHora = (e) => {
    if (e.target.name === "hora") {
      const hora = e.target.value;
      const [inputHour, inputMinute] = hora.split(":").map(Number);

      const horaAbre = { hour: 8, minute: 30 };
      const horaCierra = { hour: 20, minute: 30 };
      const inputTime = { hour: inputHour, minute: inputMinute };

      const timeToMillis = ({ hour, minute }) => hour * 60 * 60 * 1000 + minute * 60 * 1000;

      const inputTimeMillis = timeToMillis(inputTime);
      const horaAbreMillis = timeToMillis(horaAbre);
      const horaCierraMillis = timeToMillis(horaCierra);

      if (inputTimeMillis < horaAbreMillis || inputTimeMillis > horaCierraMillis) {
        setValidaHora("Horario de atención de 8:30 a 20:30");
      } else {
        setValidaHora("");
      }
    }
  };

  const opcionesHora = () =>{
    const horaInicio = { hour: 8, minute: 30 };
    const horaCierre = { hour: 20, minute: 0 };
    const intervaloHora = 30;
    const listaHoras = [];
  
    let horaActual = { ...horaInicio };
  
    while (
      horaActual.hour < horaCierre.hour ||
      (horaActual.hour === horaCierre.hour && horaActual.minute <= horaCierre.minute)
    ) {
      const formatoHora = `${String(horaActual.hour).padStart(2, '0')}:${String(
        horaActual.minute
      ).padStart(2, '0')}`;
      listaHoras.push(
        <option key={formatoHora} value={formatoHora}>
          {formatoHora}
        </option>
      );
  
      horaActual.minute += intervaloHora;
      if (horaActual.minute >= 60) {
        horaActual.minute -= 60;
        horaActual.hour += 1;
      }
    }
  
    return listaHoras;
  }
  

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post(
        "https://huellitas-backend.vercel.app//api/turno",
        { ...formTurnos, plan: planElegido }
      );
      if (response.status === 201) {
        setFormTurnos({
          fecha: "",
          hora: "",
          plan: planElegido
        });

        Swal.fire({
          icon: "success",
          title: "¡Listo!",
          text: "Turno agendado con éxito",
          showConfirmButton: false,
          timer: 1200
        });
        handleClose()
      }
    }
    catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Turno no disponible",
            confirmButtonColor: "#0056b3",
          });
        } else if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Asegurate de elegir el horario en el que esta abierta nuestra veterinaria",
            confirmButtonColor: "#0056b3",

          });
        }
      }
      console.log(error)
      // }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contenedorFormTurnos">
        <label htmlFor="fecha" className="labelFecha form-label">
          Fecha
        </label>
        <input
          type="date"
          name="fecha"
          value={formTurnos.fecha.toString()}
          onChange={handleChange}
          onBlur={handleBlurFecha}
          min={new Date().toISOString().split("T")[0]}
          className="inputFecha form-control mb-2"
          required
        />
        {validaFecha && <div className="campoInvalido">{validaFecha}</div>}
        <label htmlFor="hora" className="labelHora form-label">
          Hora
        </label>

        <select
          name="hora"
          value={formTurnos.hora.toString()}
          onChange={handleChange}
          onBlur={handleBlurHora}
          className="inputHora form-select mb-2"
          required
        >
          <option value="">Selecciona la hora</option>
          {opcionesHora()}
        </select>
        {validaHora && <div className="campoInvalido">{validaHora}</div>}
        <label htmlFor="plan" className="labelPlan form-label">
          Plan
        </label>
        <select
          className="inputPlan form-select mb-3"
          name="plan"
          value={planElegido}
          onChange={(e) => setPlanElegido(e.target.value)}
          required
        >
          <option value="">Tipo de plan</option>
          <option>Primeros pasos</option>
          <option>Madurando</option>
          <option>Adultos</option>
        </select>
        <button type="submit" className="botonModalTurnos">
          RESERVAR
        </button>

      </form>
    </>
  );
};

export default ModalTurnos;