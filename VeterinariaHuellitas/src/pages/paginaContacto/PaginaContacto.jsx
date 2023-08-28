import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./PaginaContacto.css";
import Swal from "sweetalert2";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function formularioContacto() {
  const [formData, setFormData] = useState({
    nombreApellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.nombreApellido.trim() === "" ||
      !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/) ||
      !formData.telefono.match(/^\d{10}$/) ||
      formData.mensaje.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, acepta los términos antes de enviar el formulario.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Los datos se enviaron correctamente.",
      });
      console.log("Datos del formulario:", formData);
      setFormData({
        nombreApellido: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="border rounded p-4 formularioContacto">
            <h1 className="text-center">Contactanos!</h1>
            <p className="text-center">
              Responderemos con mucho gusto a todas tus preguntas. No obstante,
              si tu mascota está enferma, ponte en contacto con nosotros por
              teléfono (95 809 10 41), ya que es posible que necesite atención
              veterinaria urgente y las consultas por e-mail pueden no ser
              respondidas en el mismo día.
              <br />
              <strong>Teléfono de URGENCIAS 24H:</strong> llama al 95 809 10 41
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nombreApellido">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreApellido"
                  value={formData.nombreApellido}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="number"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="aceptoTerminos">
                <Form.Check
                  type="checkbox"
                  label="He leido y aceptado todos los términos"
                  checked={aceptoTerminos}
                  onChange={(e) => setAceptoTerminos(e.target.checked)}
                  required
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!aceptoTerminos}
                >
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
          <div className="contact-options mt-4 text-center">
            <div className="contact-option">
              <FaPhone className="contact-icon" />
              <p>Llámanos al 95 809 10 41</p>
            </div>
            <div className="contact-option">
              <FaEnvelope className="contact-icon" />
              <p>Envíanos un correo a info@example.com</p>
            </div>
            <div className="contact-option">
              <FaWhatsapp className="contact-icon" />
              <p>Contáctanos por Whatsapp al 95 809 10 41</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default formularioContacto;
