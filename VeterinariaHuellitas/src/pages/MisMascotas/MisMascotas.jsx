import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./misMascotas.css";
import defaultGatoImage from "../../images/defaultGato.jpeg";
import defaultPerroImage from "../../images/defaultPerro.avif";

function MisMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [agregandoMascota, setAgregandoMascota] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mascotaAEliminar, setMascotaAEliminar] = useState(null);
  const [mostrarBotonAgregar, setMostrarBotonAgregar] = useState(true);

  const manejarAgregar = () => {
    setAgregandoMascota(true);
    setMostrarBotonAgregar(false);
  };

  const manejarEnviar = (datosMascota) => {
    const id = mascotas.length + 1;
    const nuevaMascota = {
      id,
      ...datosMascota,
    };
    setMascotas([...mascotas, nuevaMascota]);
    setAgregandoMascota(false);
    setMostrarBotonAgregar(true);
  };

  const manejarCancelar = () => {
    setAgregandoMascota(false);
    setMostrarBotonAgregar(true);
  };

  const mostrarModalEliminar = (id) => {
    const mascotaEliminar = mascotas.find((mascota) => mascota.id === id);
    setMascotaAEliminar(mascotaEliminar);
    setShowModal(true);
  };

  const confirmarEliminar = () => {
    if (mascotaAEliminar) {
      const nuevasMascotas = mascotas.filter(
        (mascota) => mascota.id !== mascotaAEliminar.id
      );
      setMascotas(nuevasMascotas);
      setShowModal(false);
    }
  };

  useEffect(() => {
    fetch('/src/mismascotas.json')
      .then((response) => response.json())
      .then((data) => setMascotas(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const obtenerImagenPredeterminada = (especie) => {
    const especieMinuscula = especie.toLowerCase();
    return especieMinuscula === "perro" ? defaultPerroImage : defaultGatoImage;
  };

  return (
    <div className="container">
      <h1 className="colorYestilo-verde">Mis Mascotas</h1>
      <h5>Desde aquí puedes administrar tus mascotas:</h5>
      <div className="d-flex flex-wrap justify-content-center">
        {mascotas.map((mascota) => (
          <Card key={mascota.id} className="card">
            <div className="card-header">
              <Card.Title className="card-title">{mascota.nombre}</Card.Title>
              <button
                className="btn btn-danger"
                onClick={() => mostrarModalEliminar(mascota.id)}
              >
                ELIMINAR
              </button>
            </div>
            <img
              src={mascota.foto || obtenerImagenPredeterminada(mascota.especie)}
              alt={`Imagen de ${mascota.nombre}`}
              className="card-img"
              onError={(e) => {
                e.target.src = obtenerImagenPredeterminada(mascota.especie);
              }}
            />
            <Card.Body>
              <Card.Text>
                <span className="card-text">Especie: {mascota.especie}</span>
                <br></br>
                <span className="species">Raza: {mascota.raza}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      {mostrarBotonAgregar && (
        <button className="btn btn-info" onClick={manejarAgregar}>
          AGREGAR NUEVA MASCOTA
        </button>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mascotaAEliminar && (
            <span>
              ¿Deseas eliminar a {mascotaAEliminar.nombre}?
            </span>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={() => setShowModal(false)}>
            CANCELAR
          </Button>
          <Button variant="danger" onClick={confirmarEliminar}>
            CONFIRMAR
          </Button>
        </Modal.Footer>
      </Modal>

      {agregandoMascota && <FormularioMascota onSubmit={manejarEnviar} onCancel={manejarCancelar} />}
    </div>
  );
}

const FormularioMascota = ({ onSubmit, onCancel }) => {
  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [foto, setFoto] = useState(null);

  const manejarEnviar = (e) => {
    e.preventDefault();
    onSubmit({ nombre, especie, raza, foto });
    setNombre("");
    setEspecie("");
    setRaza("");
    setFoto(null);
  };

  return (
    <div className="formulario-mascota">
      <h2>Agregar Nueva Mascota</h2>
      <Form onSubmit={manejarEnviar}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            pattern="[A-Za-z]{3,25}"
            title="El nombre debe contener solo letras y tener entre 3 y 25 caracteres."
          />
        </Form.Group>
        <Form.Group controlId="especie">
          <Form.Label>Especie:</Form.Label>
          <Form.Control
            type="text"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            required
            pattern="[A-Za-z0-9]{3,25}"
            title="La especie debe contener letras y/o números y tener entre 3 y 25 caracteres."
          />
        </Form.Group>
        <Form.Group controlId="raza">
          <Form.Label>Raza:</Form.Label>
          <Form.Control
            type="text"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            required
            pattern="[A-Za-z]{3,40}"
            title="La raza debe contener solo letras y tener entre 3 y 40 caracteres."
          />
        </Form.Group>
        <Form.Group controlId="foto">
          <Form.Label>Foto:</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </Form.Group>
        <Button type="submit" variant="info">AGREGAR</Button>
        <Button className="w-100 mt-3" type="button" variant="danger" onClick={onCancel}>
          CANCELAR
        </Button>
      </Form>
    </div>
  );
};

export default MisMascotas;
