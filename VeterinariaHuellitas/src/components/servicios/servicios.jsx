import "./servicios.css";
import Clima from "../clima/Clima";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalTurnos from "../turnos/ModalTurnos";
import gatoLogin from "../../images/login/Gato-login.svg";
import perroLoginn from "../../images/login//Perro-img-login.svg";

const Servicios = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalTurnos = () => {
    handleShow();
  };


  return (
    <>
      <div className="containerServicios">
        <div className="informacionSimple">
          <img src="src/images/logo/Logo.jpg" alt="Logo de la Clínica" />
          <h1>Clínica Veterinaria</h1>
          <h3>Consultas: Lunes-Viernes: 8:30 a 20:30</h3>
          <h3>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</h3>
          <h3>Tel. 0381 578-3030</h3>
          <Clima />
        </div>
        <div className="containerDetalles">
          <section id="especialidades">
            <h2>Nuestras Especialidades:</h2>
            <ul className="listaEspecialidades">
              <li>Medicina General</li>
              <li>Cirugía</li>
              <li>Traumatología</li>
              <li>Cardiología</li>
              <li>Nutrición</li>
            </ul>
          </section>

          <section id="servicios">
            <h2>Servicios Ofrecidos:</h2>
            <ul className="listaServicios">
              <li>Urgencias 24 HS</li>
              <li>Internación</li>
              <li>Diagnóstico por Imagen</li>
              <li>Laboratorio</li>
              <li>Banco de Sangre</li>

              <div className="boton">
                <Button className="botonTurnos" size="lg" onClick={modalTurnos}>
                  {" "}
                  Turnos{" "}
                </Button>
              </div>
            </ul>
          </section>
        </div>
      </div>
      <Modal centered size="md" show={show} onHide={handleClose}>
        <div className="contenedorModalTurnos">
          <Modal.Header
            className="headerModalTurnos border-bottom-0"
            closeButton
          >
            <div>
              <div className="contenedorImagenesTurnos">
                <img
                  src={gatoLogin}
                  alt="CaraDegato"
                  className="alturaImagen"
                />
                <img
                  src={perroLoginn}
                  alt="CaraDePerro"
                  className="alturaImagen"
                />
              </div>
              <h2 className="contenedorTituloTurnos text-center mt-2">
                TURNOS
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body className="bodyModalTurnos">
            <ModalTurnos handleClose={handleClose} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default Servicios;