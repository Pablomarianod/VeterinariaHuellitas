import { Form, Modal } from 'react-bootstrap';
import { useContext, useState } from 'react';
import gatoLogin from '../../images/Gato-login.svg';
import perroLoginn from '../../images/Perro-img-login.svg';
import './ModalLogin.css';
import { ContextoUsuarios } from '../Context/UsuariosContext';


const ModalLogin = ({ show, handleClose, handleShowRegistro }) => {
  const { login, usuarios } = useContext(ContextoUsuarios)
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarAlertaLogin, setMostrarAlertaLogin] = useState(false);
  const [mostrarAlertaErrorLogin, setMostrarAlertaErrorLogin] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const autenticado = await login(correo, password);

    if (autenticado) {

    } else {
      setMostrarAlertaErrorLogin(true);
      setTimeout(() => {
        setMostrarAlertaErrorLogin(false);
      }, 3000);
    }
  };


  const toggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };


  const abrirRegistro = () => {
    handleClose();
    handleShowRegistro();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className='colorFondoModal'>
          <Modal.Header className='border-bottom-0' closeButton>
          </Modal.Header>
          <div>
            <div className='d-flex justify-content-center'>
              <img src={gatoLogin} alt="CaraDegato" className='alturaImagen' />
              <img src={perroLoginn} alt="CaraDePerro" className='alturaImagen' />
            </div>
            <h2 className='text-center mt-3'>Iniciar Sesión</h2>
          </div>
          <Modal.Body className='px-5'>

            <form onSubmit={handleSubmit}>


              <div className='formulario_grupo'>
                <label htmlFor='correo' className='formulario_label'>Correo</label>
                <input
                  type='email'
                  className='formulario_input'
                  name='correo'
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder='Ingrese su correo'
                  required
                />

              </div>


              <div className='formulario_grupo'>
                <label htmlFor='password' className='formulario_label'>Contraseña</label>
                <input
                  type={mostrarPassword ? 'text' : 'password'}
                  className='formulario_input'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Ingrese su contraseña'
                  required
                />

                <button
                  type='button'
                  className='btn btn-outline-secondary m-1'
                  onClick={toggleMostrarPassword}
                >
                  {mostrarPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              <div className='d-flex flex-column justify-content-center mt-2'>
                <button type='submit' className='btn btn-info mb-2 text-white'>Iniciar Sesión</button>
              </div>

            </form>
            {mostrarAlertaLogin && (
            <div className="alert alert-success" role="alert">
              Bienvenido!
            </div>
          )}

            {mostrarAlertaErrorLogin && (
            <div className="alert alert-danger" role="alert">
              Usuario y/o contraseña incorrecto.
            </div>
          )}

          </Modal.Body>
          <div className='d-flex gap-1 justify-content-center'>
            <p>¿No tienes cuenta aun?</p>
            <a href='#' className='text-decoration-none fw-bold' onClick={abrirRegistro}>Crear cuenta</a>
          </div>
        </div>
      </Modal>

    </>
  )
}

export default ModalLogin