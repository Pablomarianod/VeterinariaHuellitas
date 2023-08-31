import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ProductosContexto from './components/context/ProductosContext';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoMascotas from './components/context/MascotasContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import EstructuraNavbar from './components/header/header';
import PieDePagina from './components/piedepagina/piedepagina';
import { useState } from 'react'
import {Nav, Navbar,} from 'react-bootstrap';
import ModalLogin from '../src/components/Login/ModalLogin';
import ModalRegistro from '../src/components/Registro/ModalRegistro';
import UsuariosContexto from './components/Context/UsuariosContexto.jsx'

const App = () => {
  
  const [showLogin, setShowLogin] = useState();
  const [showRegistro, setShowRegistro] = useState();
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegistro = () => setShowRegistro(false);
  const handleShowRegistro = () => setShowRegistro(true);

  return (
    <>
    <UsuariosContexto>

      <ContextoMascotas>
        <ContextoUsuarios>
          <ContextoTurnos>
            <ProductosContexto>
              <EstructuraNavbar />
              <Navbar expand="lg" className="bg-body-tertiary">
              <Nav.Link end className='nav-item nav-link' onClick={handleShowLogin}>Login</Nav.Link>
              {
                showLogin  && <ModalLogin show={showLogin} handleClose={handleCloseLogin} handleShowRegistro={handleShowRegistro}></ModalLogin>
              }
              <Nav.Link end className='nav-item nav-link' onClick={handleShowRegistro}>Registrarse</Nav.Link>
              {
                showRegistro && <ModalRegistro show={showRegistro} handleClose={handleCloseRegistro}></ModalRegistro>
              }
              </Navbar>
              <Rutas />
              <PieDePagina />
            </ProductosContexto>
          </ContextoTurnos>
        </ContextoUsuarios>
      </ContextoMascotas>
    </UsuariosContexto>

    </>
  );
};

export default App;