import React, { useState } from "react";
import FooterLogo from "../../images/footerLogo.png";
import IconoWhatsapp from "../../images/iconos/whatsapp.svg";
import IconoFacebook from "../../images/iconos/facebook.svg";
import IconoInstagram from "../../images/iconos/instagram.svg";
import IconoReloj from "../../images/iconos/reloj.png";
import IconoUbicacion from "../../images/iconos/ubicacion.png";
import IconoCode from "../../images/iconos/code.svg";
import "./piedepagina.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const PieDePagina = () => {
  const [mostrarModalMapa, setMostrarModalMapa] = useState(false);

  const ubicacion = {
    latitud: -26.836284,
    longitud: -65.207147,
    nombre: "Dirección: Gral. Paz 576",
  };

  const abrirModalMapa = () => {
    setMostrarModalMapa(true);
  };

  return (
    <footer className="containerFooter">
      <div>
        <div className="border-top border-success margin-top-5 padding-top-5"></div>
      </div>
      <div className="row">
        {/* Parte izquierda */}
        <div className="col-md-4 mt-3 mt-md-5 mt-lg-1 text-center">
          <div
            className="estilo-link fw-bold"
            onClick={() => navigate("/error404")}
          >
            <img src={FooterLogo} alt="Logo" className="img-fluid w-50" />
          </div>
          {/* Botones de redes sociales */}
          <div className="mt-3 mb-5">
            <div
              className="btn btn-success m-1"
              onClick={() => navigate("/error404")}
            >
              <img src={IconoWhatsapp} alt="WhatsApp" />
            </div>
            <div
              className="btn btn-success m-1"
              onClick={() => navigate("/error404")}
            >
              <img src={IconoFacebook} alt="Facebook" />
            </div>
            <div className="btn btn-success m-1" onClick={() => navigate("/error404")}>
              <img src={IconoInstagram} alt="Instagram" />
            </div>
          </div>
        </div>

        {/* Parte central */}
        <div className="col-md-4 text-center estilo-titulo4">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <img
                src={IconoReloj}
                alt="Reloj"
                className="color-icono mt-md-5"
              />
            </div>
            <div className="col-12 text-center">
              <h4 className="mb-3 estilo-titulo4"> Consultas
              </h4>
            </div>
          </div>
          {/* Horarios y número de contacto */}
          <p className="estilo-titulo4">Horarios de consulta:</p>
          <p className="estilo-titulo4">Lunes a Viernes: 8:00 - 17:00</p>
          <p className="estilo-titulo4">Sábados: 9:00 - 13:00</p>
          <p className="mt-3 estilo-titulo4">Teléfono de contacto:</p>
          <p className="mb-3 estilo-titulo4">381-534-2027</p>
          <div
            className="estilo-link fw-bold botonContactanos cursiva mb-5"
            onClick={() => (window.location.href = "/ruta-de-contacto")}
          >
            Contactanos
          </div>
        </div>

        {/* Parte derecha */}
        <div className="col-md-4 text-center estilo-titulo4">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <img
                src={IconoUbicacion}
                alt="Ubicación"
                className="fa-lg color-icono mt-md-3"
              />
            </div>
            <div className="col-12 text-center">
              <h4 className="mb- estilo-titulo4"> Ubicación
              </h4>
            </div>
          </div>
          {/* Dirección y mapa */}
          <p className="estilo-titulo4">San Miguel de Tucumán:</p>
          <p
            className="estilo-link fw-bold cursor-pointer mb-5"
            onClick={abrirModalMapa}
          >
            {ubicacion.nombre}
          </p>
          <Modal
            show={mostrarModalMapa}
            onHide={() => setMostrarModalMapa(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title className="negrita">Ubicación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MapContainer
                center={[ubicacion.latitud, ubicacion.longitud]}
                zoom={15}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[ubicacion.latitud, ubicacion.longitud]}>
                  <Popup>{ubicacion.nombre}</Popup>
                </Marker>
              </MapContainer>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary btn-info rounded-pill fw-bold"
                onClick={() => setMostrarModalMapa(false)}
              >
                CERRAR
              </Button>
            </Modal.Footer>
          </Modal>
          <img src={IconoCode} alt="Código" className="fa-lg color-icono mt-3" />
          {/* Enlace "Sobre Nosotros" */}
          <div className="mb-2">
            <h4 className="estilo-titulo4">Equipo de desarrollo:</h4>
          </div>
          <div
            className="estilo-link fw-bold cursor-pointer cursiva"
            onClick={() => (window.location.href = "/ruta-de-contacto")}
          >
            Sobre nosotros
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;

