import React, { useState, useEffect } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import "./misMascotas.css";
import defaultGatoImage from "../../images/defaultGato.jpeg";
import defaultPerroImage from "../../images/defaultPerro.avif";
import axios from 'axios'
import FormularioMascotas from "../../components/formulario/FormularioMascotas";

function MisMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [agregandoMascota, setAgregandoMascota] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [mascotaAEliminar, setMascotaAEliminar] = useState(null);
  const [mostrarBotonAgregar, setMostrarBotonAgregar] = useState(true);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const mostrarMascotas = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/mascotas');
      // console.log(response.data)
      setMascotas(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {

    mostrarMascotas()

  }, []);

  const obtenerImagenPredeterminada = (especie) => {
    const especieMinuscula = especie.toLowerCase();
    return especieMinuscula === "perro" ? defaultPerroImage : defaultGatoImage;
  };

  return (
    <div className="containerMascotas">
      <h1 className="colorYestilo-verde">Mis Mascotas</h1>
      <h5 className="subtituloMascotas">Desde aquí puedes administrar tus mascotas:</h5>
      <div className="d-flex flex-wrap justify-content-center">
        {mascotas.map((mascota) => (

          <Card key={mascota.id} className="cardMascotas">
            <div className="card-header">
              <Card.Title className="card-title-mascotas">{mascota.nombreMascota}</Card.Title>
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

              onError={(e) => {
                e.target.src = obtenerImagenPredeterminada(mascota.especie);
              }}
            />
            <Card.Body>
              <Card.Text>
                <span className="card-text-mascotas">Especie: {mascota.especie}</span>
                <br></br>
                <span className="species">Raza: {mascota.raza}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      {mostrarBotonAgregar && (
        <button className="btn btn-info" onClick={handleShow}>
          AGREGAR NUEVA MASCOTA
        </button>
      )}

      <Modal show={show} onHide={handleClose}>

        <Modal.Body><FormularioMascotas /></Modal.Body>
      </Modal>

      {agregandoMascota && <FormularioMascota onSubmit={manejarEnviar} onCancel={manejarCancelar} />}
    </div>
  );
}

export default MisMascotas;
