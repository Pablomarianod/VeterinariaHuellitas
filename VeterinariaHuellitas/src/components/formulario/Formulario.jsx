import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Formulario.css";

function Formulario() {
  const [infoMascota, setMascotaInfo] = useState({
    nombreMascota: "",
    especieMascota: "",
    tipoDeRaza: "",
    sexoMascota: "",
    edadMascota: "",
  });

  const handleMascotaInputChange = (event) => {
    const { name, value } = event.target;
    setMascotaInfo({
      ...infoMascota,
      [name]: value,
    });
  };

  const handleResetForm = () => {
    setInfoDueño({
      nombreMascota: "",
      especieMascota: "",
      tipoDeRaza: "",
      sexoMascota: "",
      edadMascota: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      infoMascota.nombreMascota.trim() === "" ||
      infoMascota.especieMascota.trim() === "" ||
      infoMascota.tipoDeRaza.trim() === "" ||
      infoMascota.sexoMascota.trim() === "" ||
      !Number.isInteger(parseInt(infoMascota.edadMascota)) ||
      parseInt(infoMascota.edadMascota) <= 0
    ) {
      alert("Porfavor, complete los datos solicitados.");
    } else {
      alert("Los datos se enviaron correctamente.");
      console.log("Información de la mascota:", infoMascota);
      handleResetForm();
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="border rounded p-4">
            <h1 className="text-center">Información de la Mascota</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nombreMascota">
                <Form.Label>Nombre de la Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreMascota"
                  value={infoMascota.nombreMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="especieMascota">
                <Form.Label>Especie de la Mascota</Form.Label>
                <Form.Control
                  as="select"
                  name="especieMascota"
                  value={infoMascota.especieMascota}
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
                  value={infoMascota.tipoDeRaza}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="sexoMascota">
                <Form.Label>Sexo</Form.Label>
                <Form.Control
                  type="text"
                  name="sexoMascota"
                  value={infoMascota.sexoMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="edadMascota">
                <Form.Label>Edad de la Mascota</Form.Label>
                <Form.Control
                  type="number"
                  name="edadMascota"
                  value={infoMascota.edadMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="primary" type="submit">
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
