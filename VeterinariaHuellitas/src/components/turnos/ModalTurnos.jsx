import "./modalTurnos.css";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import emailjs from "@emailjs/browser";

const ModalTurnos = ({ handleClose }) => {
  const form = useRef();

  const [formTurnos, setFormTurnos] = useState({
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

      if (fecha.getTime()  < fechaActual.getTime()) {
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
  
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    
    if(validaFecha === "" && validaHora === ""){
        try {
          const response = await axios.post(
            "http://localhost:8080/turnos",
            {...formTurnos, plan: planElegido}
          );

          setFormTurnos({
            fecha: "",
            hora: "",
            plan:""
          });
          // emailjs.sendForm('service_h1i7c1u', 'template_ysl5w5s', form.current, '3ISQGDxm28JZUQxZw')
          Swal.fire({
            icon: "success",
            title: "¡Listo!",
            text: "Turno agendado con éxito",
            showConfirmButton: false,
            timer: 1200
          });
          handleClose()
        }
        catch (error) {
          if (error.response) {
            if (error.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Asegurate de elegir el horario en el que esta abierta nuestra veterinaria",
                confirmButtonColor: "#0056b3",
              });
            } else if (error.response.status === 409) {
              Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Turno no disponible",
                confirmButtonColor: "#0056b3",
              });
            }
          }
        console.log(error)
        }}
      };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit} className="contenedorFormTurnos">
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
        <input
          type="time"
          name="hora"
          value={formTurnos.hora.toString()}
          onChange={handleChange}
          onBlur={handleBlurHora}
          className="inputHora form-control mb-2"
          required
        />
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