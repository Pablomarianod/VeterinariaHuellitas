import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoMascotas = createContext();

const MascotasContext = ({ children }) => {
  const [mascotas, setMascotas] = useState([]);

  //GET

  const obtenerMascotas = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/mascotas");
      setMascotas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerMascotas();
  }, []);

  //POST

  const registrarMascota = async (mascota) => {
    try {
      await axios.post("http://localhost:8080/api/mascota", mascota);

      setMascotas([...mascotas, mascota])

    } catch (error) {
      console.log(error)
    }
  };

  //PUT

  const modificarMascota = async (mascota) => {
    try {
      await axios.put(`http://localhost:8080/api/mascota/${mascota._id}`, mascota);
      await obtenerMascotas();
    } catch (error) {
      console.log(error)
    }
  };

  //DELETE

  const eliminarMascota = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/mascota/${id}`);
      const eliminarMascota = mascotas.filter((mascota) => mascota.id !== id);
      setMascotas(eliminarMascota)
      await obtenerMascotas();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <ContextoMascotas.Provider value={{ obtenerMascotas, registrarMascota, modificarMascota, eliminarMascota, mascotas, setMascotas }}>
        {children}
      </ContextoMascotas.Provider>
    </>
  );
};

export default MascotasContext;