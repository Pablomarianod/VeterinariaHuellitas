import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormularioMascotas.css";
import Swal from "sweetalert2";

function Formulario() {
  const [formData, setFormData] = useState({
    nombreMascota: "",
    especieMascota: "",
    tipoDeRaza: "",
    sexoMascota: "",
    edadMascota: "",
  });

  const handleMascotaInputChange = (event) => {
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
      formData.nombreMascota.trim() === "" ||
      formData.especieMascota.trim() === "" ||
      formData.tipoDeRaza.trim() === "" ||
      formData.sexoMascota.trim() === "" ||
      !Number.isInteger(parseInt(formData.edadMascota)) ||
      parseInt(formData.edadMascota) <= 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, acepta los términos antes de enviar el formulario.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Éxito!",
        text: "Los datos se enviaron correctamente.",
      });
      console.log("Información de la mascota:", formData);
      setFormData({
        nombreMascota: "",
        especieMascota: "",
        tipoDeRaza: "",
        sexoMascota: "",
        edadMascota: "",
      });
      setAceptoTerminos(false);
    }
  };

  return (
    <Container className="mt-5">
      <Container>
        <Col md={12}>
          <div className="atencion-container">Atención las 24hs del día</div>
        </Col>
      </Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="border rounded p-4 formulario">
            <h1 className="text-center">Información de la Mascota</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nombreMascota">
                <Form.Label>Nombre de la Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreMascota"
                  value={formData.nombreMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="especieMascota">
                <Form.Label>Especie de la Mascota</Form.Label>
                <Form.Control
                  as="select"
                  name="especieMascota"
                  value={formData.especieMascota}
                  onChange={handleMascotaInputChange}
                  required
                >
                  <option value="">Seleccionar Especie</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Aves">Aves</option>
                  <option value="Roedores">Roedores</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="tipoDeRaza">
                <Form.Label>Raza</Form.Label>
                <Form.Control
                  type="text"
                  name="tipoDeRaza"
                  value={formData.tipoDeRaza}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="sexoMascota">
                <Form.Label>Sexo</Form.Label>
                <Form.Control
                  type="text"
                  name="sexoMascota"
                  value={formData.sexoMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="edadMascota">
                <Form.Label>Edad de la Mascota</Form.Label>
                <Form.Control
                  type="number"
                  name="edadMascota"
                  value={formData.edadMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
                <Form.Group controlId="aceptoTerminos">
                  <Form.Check
                    type="checkbox"
                    label="He leido y aceptado todos los términos"
                    checked={aceptoTerminos}
                    onChange={(e) => setAceptoTerminos(e.target.checked)}
                    required
                  />
                </Form.Group>
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
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
        </Col>
      </Row>
    </Container>
  );
}

export default Formulario;
