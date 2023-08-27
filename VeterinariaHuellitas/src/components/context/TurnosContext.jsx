import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoTurnos = createContext();

const TurnosContext = ({ children }) => {
  const [turnos, setTurnos] = useState([]);

//GET

  const obtenerTurnos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/turnos");
      setTurnos(response.data);
      console.log(turnos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerTurnos();
  }, []);

//PUT

const editarTurnos = async (turno)=>{
  try {
    await axios.put(`http://localhost:8080/turnos/${turno.id}`, turno);
    await obtenerTurnos();
  } catch (error) {
    console.log(error)
    
  }

};

//DELETE

const eliminarTurnos = async (id) =>{
  try {
    await axios.delete(`http://localhost:8080/turnos/${id}`);
    const eliminarTurnos = turnos.filter((turno) => turno.id !== id);
    setTurnos(eliminarTurnos)
  } catch (error) {
    console.log(error)
  }
};

  return (
    <>
      <ContextoTurnos.Provider value={{ obtenerTurnos, editarTurnos, eliminarTurnos, turnos }}>
        {children}
      </ContextoTurnos.Provider>
    </>
  );
};

export default TurnosContext;
