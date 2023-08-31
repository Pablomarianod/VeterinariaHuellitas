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
      
    </UsuariosContexto>
    </>
  )
}

export default App
