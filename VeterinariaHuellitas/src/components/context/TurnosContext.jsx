import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoTurnos = createContext();

const TurnosContext = ({ children }) => {
  const [turnos, setTurnos] = useState([]);

  //GET

  const obtenerTurnos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/turnos");
      setTurnos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerTurnos();
  }, []);


  //POST

  const registrarTurno = async (turno) => {
    try {
      await axios.post("http://localhost:8080/api/turno", turno);

      setTurnos([...turnos, turno])

    } catch (error) {
      console.log(error)
    }
  };

  //PUT

  const modificarTurno = async (turno) => {
    try {
      await axios.put(`http://localhost:8080/api/turno/${turno.id}`, turno);
      await obtenerTurnos();
    } catch (error) {
      console.log(error)
    }

  };

  //DELETE

  const eliminarTurno = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/turno/${id}`);
      const eliminarTurno = turnos.filter((turno) => turno.id !== id);
      setTurnos(eliminarTurno)
      await obtenerTurnos();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <ContextoTurnos.Provider value={{ obtenerTurnos, registrarTurno, modificarTurno, eliminarTurno, turnos, setTurnos }}>
        {children}
      </ContextoTurnos.Provider>
    </>
  );
};

export default TurnosContext;
