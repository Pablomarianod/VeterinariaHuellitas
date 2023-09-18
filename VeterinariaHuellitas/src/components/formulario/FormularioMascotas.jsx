import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormularioMascotas.css";
import Swal from "sweetalert2";
import axios from "axios";

const FormularioMascotas = () => {


  const [formData, setFormData] = useState({
    nombreMascota: "",
    especie: "",
    raza: "",
    sexoMascota: "",
    edad: "",
    // nombreMascota: "",
    // especieMascota: "",
    // tipoDeRaza: "",
    // sexoMascota: "",
    // edadMascota: "",
  });

  const handleMascotaInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const crearMascota = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/mascota", { ...formData });
      
    } catch (error) {
      console.log(error.response)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.nombreMascota.trim() === "" ||
      formData.especie.trim() === "" ||
      formData.raza.trim() === "" ||
      formData.sexoMascota.trim() === "" ||

      // formData.nombreMascota.trim() === "" ||
      // formData.especieMascota.trim() === "" ||
      // formData.tipoDeRaza.trim() === "" ||
      // formData.sexoMascota.trim() === "" ||
      !Number.isInteger(parseInt(formData.edad)) ||
      parseInt(formData.edad) <= 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, Coloca una edad valida.",
      });
    } else {
      
      crearMascota();
      Swal.fire({
        icon: "success",
        title: "Éxito!",
        text: "Los datos se enviaron correctamente.",
      });
      console.log("Información de la mascota:", formData);
      setFormData({
        nombreMascota: "",
        especie: "",
        raza: "",
        sexoMascota: "",
        edad: "",

        // nombreMascota: "",
        // especieMascota: "",
        // tipoDeRaza: "",
        // sexoMascota: "",
        // edadMascota: "",
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
              <Form.Group controlId="especie">
                <Form.Label>Especie de la Mascota</Form.Label>
                <Form.Control
                  as="select"
                  name="especie"
                  value={formData.especie}
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

              <Form.Group controlId="raza">
                <Form.Label>Raza</Form.Label>
                <Form.Control
                  type="text"
                  name="raza"
                  value={formData.raza}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="sexoMascota">
                <Form.Label>Sexo</Form.Label>

                <Form.Control
                  as="select"
                  name="sexoMascota"
                  value={formData.sexoMascota}
                  onChange={handleMascotaInputChange}
                  required
                >
                  <option value="">Seleccionar Sexo</option>
                  <option value="Hembra">Hembra</option>
                  <option value="Macho">Macho</option>
                </Form.Control>

                {/* <Form.Control
                  type="text"
                  name="sexoMascota"
                  value={formData.sexoMascota}
                  onChange={handleMascotaInputChange}
                  required
                /> */}
              </Form.Group>
              <Form.Group controlId="edad">
                <Form.Label>Edad de la Mascota</Form.Label>
                <Form.Control
                  type="number"
                  name="edad"
                  value={formData.edad}
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
                  className="BotonModalregistro"
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

export default FormularioMascotas;