import React, { useState, useEffect, useContext } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import "./misMascotas.css";
import defaultGatoImage from "../../images/defaultGato.jpeg";
import defaultPerroImage from "../../images/defaultPerro.avif";
import axios from 'axios'
import FormularioMascotas from "../../components/formulario/FormularioMascotas";
import { ContextoMascotas } from "../../components/Context/MascotasContext";
import Swal from "sweetalert2";

function MisMascotas() {
  const { eliminarMascota } = useContext(ContextoMascotas);
  const [mascotas, setMascotas] = useState([]);
  const [mostrarBotonAgregar] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la mascota.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarMascota(id);
        await mostrarMascotas();
        Swal.fire('Mascota eliminada', '', 'success');
      }
    });
  };
  

  const mostrarMascotas = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/mascotas');
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

          <Card key={mascota._id} className="cardMascotas">
            <div className="card-header">
              <Card.Title className="card-title-mascotas">{mascota.nombreMascota}</Card.Title>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(mascota._id)}
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
    </div>
  );
}

export default MisMascotas;
