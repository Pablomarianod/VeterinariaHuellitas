import { Button, Modal } from "react-bootstrap";
import imagenConclusion from "../../images/mujerconperro2.jpg";
import "./DetallePlanes.css";
import { useState } from "react";
import ModalFormPlanes from "../../components/planes/ModalFormPlanes";
import gatoLogin from "../../images/login/Gato-login.svg";
import perroLoginn from "../../images/login//Perro-img-login.svg";

const Planes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalDatos = () => {
    handleShow();
  };

  return (
    <>
      <main className="containerDetallePlanes container">
        <h1>Nuestros Planes</h1>
        <div className="row gx5">
          <div className="contenedorConclusion col">
            <div className="conclusion">
              <div className="textoConclusion">
                <p>
                  Cada uno de nuestros planes está diseñado para adaptarse a las
                  diferentes necesidades de cuidado de tu mascota, brindándote
                  opciones flexibles y confiables para mantener a tu compañero
                  peludo saludable y feliz.
                </p>
              </div>
              <div className="contenedorImgConcl">
                <img className="imagenConclusion" src={imagenConclusion} />
                <Button className="botonModal" onClick={modalDatos}>
                  SABER MAS
                </Button>
              </div>
            </div>
          </div>
          <div className="contenedorPlanes col">
            <div className="plan-container">
              <div className="plan-name">PRIMEROS PASOS</div>
              <div className="plan-description">
                Nuestro Plan "Primeros Pasos" está diseñado para proporcionar
                una atención esencial y accesible para tus mascotas. Incluye
                exámenes de salud anuales, vacunas importantes para prevenir
                enfermedades comunes, y desparasitación regular para mantener a
                tu compañero peludo protegido contra parásitos internos y
                externos. Es ideal para propietarios que buscan cuidados
                preventivos fundamentales a un precio asequible.
              </div>
            </div>
            <div className="plan-container">
              <div className="plan-name">MADURANDO</div>
              <div className="plan-description">
                El Plan "Madurando" lleva el cuidado de tu mascota al siguiente
                nivel al ofrecer una gama más amplia de servicios. Además de los
                exámenes anuales y las vacunas necesarias, este plan abarca
                análisis de sangre y orina para detectar problemas de salud
                temprano, lo que permite un tratamiento más efectivo. También
                incluye consultas ilimitadas, lo que brinda tranquilidad a los
                dueños de mascotas al saber que pueden acceder a la atención
                veterinaria cuando la necesiten.
              </div>
            </div>
            <div className="plan-container">
              <div className="plan-name">ADULTOS</div>
              <div className="plan-description">
                Nuestro Plan "Adultos" es la opción más completa y avanzada para
                el bienestar de tu mascota. Ofrecemos exámenes médicos
                exhaustivos que abarcan desde radiografías hasta ecografías,
                permitiendo una evaluación profunda de la salud interna. Este
                plan cubre cirugías programadas, así como procedimientos
                especializados para abordar problemas de salud específicos.
                También incluye acceso a especialistas veterinarios y terapias
                avanzadas, garantizando que tu mascota reciba la atención más
                completa y avanzada disponible.
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Modal centered size="md" show={show} onHide={handleClose}>
        <div className="contenedorModalPlanes">
          <Modal.Header
            className="headerModalPlanes border-bottom-0"
            closeButton
          >
          </Modal.Header>
          <div>
            <div className="d-flex justify-content-center">
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
            <h2 className="contenedorTituloPlanes text-center mt-2">
              MAS INFO DE PLANES
            </h2>
          </div>
          <Modal.Body className="bodyModalPlanes">
            <ModalFormPlanes handleClose={handleClose} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
export default Planes;