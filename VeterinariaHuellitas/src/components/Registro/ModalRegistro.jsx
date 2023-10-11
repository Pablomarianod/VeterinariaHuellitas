import './ModalRegistro.css'
import { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ContextoUsuarios } from '../Context/UsuariosContext';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ModalRegistro = ({ show, handleClose }) => {

  const { registrarUsuario } = useContext(ContextoUsuarios);

  const [usuarios, setUsuarios] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    password: "",
    passwordConfirm: "",
    rol: "usuario"
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
    setMostrarErrorContraseña(false);

    if (expresiones[name] && expresiones[name].regex) {
      if (!expresiones[name].regex.test(value)) {
        setErrores({
          ...errores,
          [name]: expresiones[name].mensaje,
        });
      } else {
        setErrores({
          ...errores,
          [name]: '',
        });
      }
    }
  };


  const [mostrarErrorContraseña, setMostrarErrorContraseña] = useState(false);
  const [mostrarAlertaRegistro, setMostrarAlertaRegistro] = useState(false);


  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposConErrores = Object.values(errores).some((error) => error !== '');

    if (!camposConErrores) {

      if (usuarios.password === usuarios.passwordConfirm) {
        registrarUsuario(usuarios);

        setUsuarios({
          nombre: "",
          apellido: "",
          telefono: "",
          correo: "",
          password: "",
          passwordConfirm: "",
          rol: "usuario"
        });

        setMostrarAlertaRegistro(true);

        setTimeout(() => {
          setMostrarAlertaRegistro(false);
        }, 3000);

      } else {

        setMostrarErrorContraseña(true);
        setTimeout(() => {
          setMostrarErrorContraseña(false);
        }, 3000);
      }
    }
  };

  const expresiones = {
    nombre: {
      regex: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
      mensaje: 'Ingresa un nombre válido.',
    },
    apellido: {
      regex: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
      mensaje: 'Ingresa un apellido válido.',
    },
    telefono: {
      regex: /^\d{10,12}$/,
      mensaje: 'Ingresa un número válido, incluyendo código de area.',
    },
    correo: {
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      mensaje: 'Ingresa un correo electrónico válido.',
    },
    password: {
      regex: /^.{8,16}$/,
      mensaje: 'La contraseña debe tener un minimo de 8 carateres.',
    },
    passwordConfirm: {
      regex: /^.{8,16}$/,
      mensaje: 'La contraseña debe tener un minimo de 8 caracteres.',
    },
  };

  const [errores, setErrores] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    password: "",
    passwordConfirm: "",
  });

  const getCampoClassName = (campo) => {
    if (errores[campo]) {
      return 'formulario_grupo-incorrecto';
    } else if (usuarios[campo]) {
      return 'formulario_grupo-correcto';
    }
    return '';
  };

  const getValidacionEstadoClassName = (campo) => {
    if (errores[campo]) {
      return 'bi bi-x-circle';
    } else if (usuarios[campo]) {
      return 'bi bi-check-circle formulario_validacion-correcto';
    }
    return '';
  };

  // Funciones para mostrar/ocultar contraseñas
  const toggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  const toggleMostrarPasswordConfirm = () => {
    setMostrarPasswordConfirm(!mostrarPasswordConfirm);
  };

  return (
    <Modal show={show} onHide={handleClose}>


      <div className="encabezado-modalRegistro">
        <h2 className='text-center mt-3 titulo-registro'>Crea tu cuenta</h2>
        <Button variant="outline-danger" className="btn-cerrar" onClick={handleClose}>
          <i className="bi bi-x"></i>
        </Button>
      </div>

      <Modal.Body className='px-1'>
        <div className='px-2'>

          <form className='formulario' onSubmit={handleSubmit}>

            <div className={`formulario_grupo ${getCampoClassName('nombre')}`}>
              <label htmlFor="nombre" className="formulario_label">Nombres</label>

              <div className='formulario_grupo-input'>

                <input
                  type="text"
                  className="formulario_input"
                  name="nombre"
                  placeholder="Ingresa tus nombres"
                  required
                  minLength={2}
                  maxLength={30}
                  value={usuarios.nombre}
                  onChange={handleChange}

                />


                <i className={`formulario_validacion-estado ${getValidacionEstadoClassName('nombre')}`}></i>

              </div>
              <p className={`formulario_input-error ${errores.nombre ? 'formulario_input-error-activo' : ''}`}>
                {errores.nombre}
              </p>

            </div>


            <div className={`formulario_grupo ${getCampoClassName('apellido')}`}>
              <label htmlFor="apellido" className="formulario_label">Apellidos</label>

              <div className='formulario_grupo-input'>

                <input
                  type="text"
                  className="formulario_input"
                  name="apellido"
                  placeholder="Ingresa tus apellidos"
                  required
                  minLength={2}
                  maxLength={30}
                  value={usuarios.apellido}
                  onChange={handleChange}
                />

                <i className={`formulario_validacion-estado ${getValidacionEstadoClassName('apellido')}`}></i>

              </div>
              <p className={`formulario_input-error ${errores.apellido ? 'formulario_input-error-activo' : ''}`}>
                {errores.apellido}
              </p>

            </div>


            <div className={`formulario_grupo ${getCampoClassName('telefono')}`}>
              <label htmlFor="telefono" className="formulario_label">Teléfono</label>

              <div className='formulario_grupo-input'>

                <input
                  type="text"
                  className="formulario_input"
                  name="telefono"
                  placeholder="Ingresa tu número de telefono"
                  required
                  minLength={10}
                  maxLength={12}
                  value={usuarios.telefono}
                  onChange={handleChange}
                />

                <i className={`formulario_validacion-estado ${getValidacionEstadoClassName('telefono')}`}></i>

              </div>
              <p className={`formulario_input-error ${errores.telefono ? 'formulario_input-error-activo' : ''}`}>
                {errores.telefono}
              </p>

            </div>


            <div className={`formulario_grupo ${getCampoClassName('correo')}`}>
              <label htmlFor="correo" className="formulario_label">Correo Electrónico</label>

              <div className='formulario_grupo-input'>

                <input
                  type="email"
                  className="formulario_input"
                  name="correo"
                  placeholder="Ingresa tu e-mail"
                  required
                  minLength={7}
                  maxLength={80}
                  value={usuarios.correo}
                  onChange={handleChange}
                />

                <i className={`formulario_validacion-estado ${getValidacionEstadoClassName('correo')}`}></i>

              </div>
              <p className={`formulario_input-error ${errores.correo ? 'formulario_input-error-activo' : ''}`}>
                {errores.correo}
              </p>

            </div>


            <div className={`formulario_grupo ${getCampoClassName('password')}`}>
              <label htmlFor="password" className="formulario_label">Contraseña</label>

              <div className='formulario_grupo-input'>

                <input
                  type={mostrarPassword ? "text" : "password"}
                  className="formulario_input"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  required
                  minLength={8}
                  maxLength={20}
                  value={usuarios.password}
                  onChange={handleChange}
                />

                <i className={`formulario_validacion-estado ${getValidacionEstadoClassName('password')}`}></i>

              </div>
              <button
                type="button"
                className="btn btn-outline-secondary mostrarClave m-1"
                onClick={toggleMostrarPassword}
              >
                {mostrarPassword ? 'Ocultar' : 'Mostrar'}
              </button>
              <p className={`formulario_input-error ${errores.password ? 'formulario_input-error-activo' : ''}`}>
                {errores.password}
              </p>

            </div>


            <div className={`formulario_grupo ${getCampoClassName('passwordConfirm')}`}>
              <label htmlFor="passwordConfirm" className="formulario_label">Confirmar contraseña</label>

              <div className='formulario_grupo-input'>

                <input
                  type={mostrarPasswordConfirm ? "text" : "password"}
                  className="formulario_input "
                  name="passwordConfirm"
                  placeholder="Repite tu contraseña"
                  required
                  minLength={8}
                  maxLength={20}
                  value={usuarios.passwordConfirm}
                  onChange={handleChange}
                />
                <i className={`formulario_validacion-estado ${getValidacionEstadoClassName('passwordConfirm')}`}></i>


              </div>
              <button
                type="button"
                className="btn btn-outline-secondary m-1 mostrarClave"
                onClick={toggleMostrarPasswordConfirm}
              >
                {mostrarPasswordConfirm ? 'Ocultar' : 'Mostrar'}
              </button>
              <p className={`formulario_input-error ${errores.passwordConfirm ? 'formulario_input-error-activo' : ''}`}>
                {errores.passwordConfirm}
              </p>

            </div>

            <div className="mb-3">
              {/* <label htmlFor="formGroupExampleInput" className="form-label">rol</label> */}
              <input type="hidden" className="form-control" value={usuarios.rol} onChange={handleChange} name="rol" placeholder="Ingresa tu rol" />
            </div>


            <div className='d-flex flex-column justify-content-center mt-2'>
              <button type='submit' className='btn btn-info mb-2 text-white'>Registrar usuario</button>
            </div>

          </form >

        </div>
      </Modal.Body>
    </Modal>
  )
}


export default ModalRegistro