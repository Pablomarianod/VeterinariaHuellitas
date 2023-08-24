import Accordion from 'react-bootstrap/Accordion';
import './planes.css';
import Button from 'react-bootstrap/Button';


function Planes() {
  return (
    <div className='planesContainer'>
      <h1 className="tituloPlanes">Nuestros Planes</h1>
      <Accordion className='estiloPlanes'>
        <Accordion.Item eventKey="0" className='estiloPlan'>
          <Accordion.Header className='tituloPlan'>Primeros pasos</Accordion.Header>
          <Accordion.Body>
          Cuidado esencial y asequible que incluye exámenes anuales, vacunas clave y desparasitación para una protección básica y accesible de tu mascota.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className='estiloPlan'>
          <Accordion.Header className='tituloPlan'>Madurando</Accordion.Header>
          <Accordion.Body>
          Lleva el cuidado al siguiente nivel con análisis tempranos, consultas ilimitadas y servicios ampliados para un cuidado completo y a medida de tu compañero peludo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className='estiloPlan'>
          <Accordion.Header className='tituloPlan'>Adultos</Accordion.Header>
          <Accordion.Body>
          Atención avanzada con exámenes exhaustivos, cirugías programadas, acceso a especialistas y terapias especializadas para garantizar el máximo bienestar y salud de tu mascota.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button className='botonPlanes' variant="primary" size="lg"> Ver Planes </Button>
    </div>
  );
}

export default Planes;