import Card from 'react-bootstrap/Card';
import "./Profesionales.css"
import { CardGroup } from 'react-bootstrap';


function Profesionales() {
  return (
    <>
      <h1 className='tituloMedicos'>Nuestros Medicos</h1>

      <CardGroup>
        <Card className='mx-2 mb-4 text-center custom-card'>
          <Card.Img variant="top" src="src/images/profesionales/MedicaGeneralista.jpg" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>Medicina General</Card.Title>
            <Card.Text>
            Experta en brindar cuidados integrales para mascotas de todas las edades y razas, ofreciendo diagnósticos precisos, tratamientos efectivos y orientación en salud preventiva para mantener a tus compañeros peludos en su mejor estado.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className='mx-2 mb-4 text-center custom-card'>
          <Card.Img variant="top" src="src/images/profesionales/MedicoTraumatologo.png" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>Traumatología</Card.Title>
            <Card.Text>
            Especializado en lesiones óseas y articulares, nuestro traumatólogo es un veterinario altamente capacitado en diagnosticar y tratar problemas musculoesqueléticos en animales, restaurando la movilidad y calidad de vida de tus mascotas.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className='mx-2 mb-4 text-center custom-card'>
          <Card.Img variant="top" src="src/images/profesionales/MedicaCardiologa.jpeg" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>Cardiología </Card.Title>
            <Card.Text>
            Nuestra cardióloga se dedica a diagnosticar y tratar afecciones del corazón y el sistema circulatorio en animales. Su experiencia en ecocardiografías y terapias cardíacas garantiza un cuidado óptimo para la salud del corazón de tus mascotas.
            </Card.Text>

          </Card.Body>
        </Card>
      </CardGroup>
    </>

  );
}

export default Profesionales;