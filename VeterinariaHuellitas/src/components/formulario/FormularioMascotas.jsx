import "./FormularioMascotas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { ContextoMascotas } from "../Context/MascotasContext";

const FormularioMascotas = ({handleClose}) => {

  const usuario = JSON.parse(localStorage.getItem("usuario"))

  const { registrarMascota } = useContext(ContextoMascotas);

  const [mascotas, setMascotas] = useState({
    nombreDueno: usuario.nombre,
    correoDueno: usuario.correo,
    nombreMascota: "",
    especie: "",
    raza: "",
    sexoMascota: "",
    edad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMascotas({ ...mascotas, [name]: value });
  };

  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      mascotas.nombreMascota.trim() === "" ||
      mascotas.especie.trim() === "" ||
      mascotas.raza.trim() === "" ||
      mascotas.sexoMascota.trim() === "" ||
      !Number.isInteger(parseInt(mascotas.edad)) ||
      parseInt(mascotas.edad) <= 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, Coloca una edad valida.",
      });
    } else {

      registrarMascota(mascotas);

      Swal.fire({
        icon: "success",
        title: "Éxito!",
        text: "Mascota cargada correctamente.",
        showConfirmButton: false,
        timer: 2000
      });
      handleClose()
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
                  value={mascotas.nombreMascota}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="especie">
                <Form.Label>Especie de la Mascota</Form.Label>
                <Form.Control
                  as="select"
                  name="especie"
                  value={mascotas.especie}
                  onChange={handleChange}
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
                  value={mascotas.raza}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="sexoMascota">
                <Form.Label>Sexo</Form.Label>

                <Form.Control
                  as="select"
                  name="sexoMascota"
                  value={mascotas.sexoMascota}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar Sexo</option>
                  <option value="Hembra">Hembra</option>
                  <option value="Macho">Macho</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="edad">
                <Form.Label>Edad de la Mascota</Form.Label>
                <Form.Control
                  type="number"
                  name="edad"
                  value={mascotas.edad}
                  onChange={handleChange}
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