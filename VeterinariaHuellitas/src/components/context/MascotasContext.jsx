import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoMascotas = createContext();

const MascotasContext = ({ children }) => {
const [mascotas, setMascotas] = useState([]);

  //POST

  const agregarMascota = async (mascota) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/mascotas",
      mascota
    );
    setMascotas([...mascotas, response.data]);
  } catch (error) {
    console.log(error);
  }
};


//GET

  const obtenerMascotas = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/mascotas");
      setMascotas(response.data);
      console.log(mascotas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerMascotas();
  }, []);

//PUT

const editarMascotas = async (mascota)=>{
  try {
    await axios.put(`http://localhost:8080/api/mascotas/${mascota.id}`, mascota);
    await obtenerMascotas();
  } catch (error) {
    console.log(error)
    
  }

};

//DELETE

const eliminarMascotas = async (id) =>{
  try {
    await axios.delete(`http://localhost:8080/api/mascotas/${id}`);
    const eliminarMascotas = mascotas.filter((mascota) => mascota.id !== id);
    setMascotas(eliminarMascotas)
  } catch (error) {
    console.log(error)
  }
};

  return (
    <>
      <ContextoMascotas.Provider value={{ agregarMascota, obtenerMascotas, editarMascotas, eliminarMascotas, mascotas }}>
        {children}
      </ContextoMascotas.Provider>
    </>
  );
};

export default MascotasContext;