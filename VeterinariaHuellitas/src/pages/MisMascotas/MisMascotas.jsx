import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./misMascotas.css";

function MisMascotas() {
  const [mascotas, setMascotas] = useState([
    {
      id: 1,
      nombre: "Patricio",
      especie: "Perro",
      raza: "Bichón Frisé",
      foto: "url_de_la_foto1.jpg",
    },
    {
      id: 2,
      nombre: "Hércules",
      especie: "Gato",
      raza: "Mestizo",
      foto: "url_de_la_foto2.jpg",
    },
    {
      id: 3,
      nombre: "Chelo",
      especie: "perro",
      raza: "Bulldog Francés",
      foto: "url_de_la_foto3.jpg",
    },
  ]);

  const [agregandoMascota, setAgregandoMascota] = useState(false);

  const obtenerImagenPredeterminada = (especie) => {
    const especieMinuscula = especie.toLowerCase();
    const imagenPerroPredeterminada = "src/images/defaultPerro.avif";
    const imagenGatoPredeterminada = "src/images/defaultGato.jpeg";
    return especieMinuscula === "perro"
      ? imagenPerroPredeterminada
      : especieMinuscula === "gato"
      ? imagenGatoPredeterminada
      : "imagen_generica.jpg";
  };

  const manejarAgregar = () => {
    setAgregandoMascota(true);
  };

  const manejarEnviar = (data) => {
    if (data) {
      const nuevaMascota = {
        id: mascotas.length + 1,
        ...data,
      };
      setMascotas([...mascotas, nuevaMascota]);
      setAgregandoMascota(false);
    }
  };

  const manejarEliminar = (id) => {
    const confirmarEliminar = window.confirm("¿Seguro que deseas eliminar esta mascota?");
    if (confirmarEliminar) {
      const mascotasActualizadas = mascotas.filter((mascota) => mascota.id !== id);
      setMascotas(mascotasActualizadas);
    }
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
                className="delete-icon"
                onClick={() => manejarEliminar(mascota.id)}
              >
                Eliminar
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
                <p className="card-text">Especie: {mascota.especie}</p>
                <p className="species">Raza: {mascota.raza}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <button onClick={manejarAgregar}>Agregar Nueva Mascota</button>
      {agregandoMascota && <FormularioMascota onSubmit={manejarEnviar} />}
    </div>
  );
}

function FormularioMascota({ onSubmit }) {
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
      <form onSubmit={manejarEnviar}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Especie:
          <input
            type="text"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            required
          />
        </label>
        <label>
          Raza:
          <input
            type="text"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            required
          />
        </label>
        <label>
          Foto:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default MisMascotas;
