import { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import svgNombreRegistro from '../../images/username-icon.svg';
import svgCorreoRegistro from '../../images/email.svg';
import svgContrasenaRegistro from '../../images/password-icon.svg';
import svgTelefonoRegistro from '../../images/phone-icon.svg';
import './ModalRegistro.css'
import { ContextoUsuarios } from '../context/UsuariosContext';
import 'bootstrap-icons/font/bootstrap-icons.css';



const ModalRegistro = (show, handleClose) => {

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
    const { name, value } = e.target; // Obtiene name y value desde el evento
    setUsuarios({ ...usuarios, [name]: value });
    setMostrarErrorContraseña(false);

    // Validación del campo
    if (expresiones[name] && expresiones[name].regex) {
      if (!expresiones[name].regex.test(value)) {
        setErrores({
          ...errores,
          [name]: expresiones[name].mensaje,
        });
      } else {
        setErrores({
          ...errores,
          [name]: '', // Limpia el mensaje de error si la validación es exitosa
        });
      }
    }
  };


  const [mostrarErrorContraseña, setMostrarErrorContraseña] = useState(false);
  const [mostrarAlertaRegistro, setMostrarAlertaRegistro] = useState(false);


  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);

  //Aqui se crean los usuarios

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si hay algún error de validación en los campos
    const camposConErrores = Object.values(errores).some((error) => error !== '');

    if (!camposConErrores) {

      if (usuarios.password === usuarios.passwordConfirm) {
        registrarUsuario(usuarios);

        // Las contraseñas coinciden, puedes continuar con el envío del formulario.
        setUsuarios({
          nombre: "",
          apellido: "",
          telefono: "",
          correo: "",
          password: "",
          passwordConfirm: "",
          rol: "usuario"
        });

        // Mostrar la alerta de registro exitoso
        setMostrarAlertaRegistro(true);

        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
          setMostrarAlertaRegistro(false);
        }, 3000);

      } else {
        // Las contraseñas no coinciden, puedes mostrar un mensaje de error al usuario.
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


  //   const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  //   const { registrar, errorRegistro } = ContextoUsuarios();

  //   const [datosUsuario, setDatosUsuario] = useState({
  //     nombre: "",
  //     apellido: "",
  //     correo: "",
  //     contrasena: "",
  //     telefono: "",
  //     rol: "usuario"
  //   });


  //   const handleChange = (evento) => {
  //     setDatosUsuario({ ...datosUsuario, [evento.target.name]: evento.target.value })
  //   }


  //   const onSubmit = handleSubmit(async (values) => {
  //     const respuesta = await registrar(values);
  //     if (respuesta !== 400) {
  //       setDatosUsuario({ nombre: "", apellido: "", correo: "", contrasena: "", telefono: "", rol: "usuario" })
  //       reset();
  //       handleClose();
  //       Swal.fire('Su usuario se creo exitosamente', ':)', 'success');
  //     }
  //   });

  return (
    <Modal show={show} onHide={handleClose}>

      <Modal.Header closeButton className='border-bottom-0'>
      </Modal.Header>

      <div>
        <div className='d-flex justify-content-center'>
          <img src="" alt="" />
        </div>
        <h2 className='text-center mt-3'>Crea tu cuenta</h2>
      </div>

      {/*<Modal.Body className='px-5'>*/}
      <div className='px-5'>

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
              className="btn btn-outline-secondary m-1"
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
              className="btn btn-outline-secondary m-1"
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

        {/* {
          errorRegistro.map((error, i) => (
            <div className='alert alert-danger p-2' key={i}> {error} </div>
          ))
        } */}
        {/* 
        <form onSubmit={onSubmit}>


          <div className="mb-3 input-group">
            <div className="input-group-text bg-info">
              <img src={svgNombreRegistro} alt="" className="imgRegistroFormulario" />
            </div>
            <input type="text" 
              className={`form-control ${errors.nombre ? "is-invalid" : ""}`} 
              placeholder="Nombre" name='nombre' aria-describedby="nombre" 
              {...register("nombre", {
                required:{
                  value: true,
                  message: "El nombre es requerido"
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener un minimo de 3 caracteres"
                },
                maxLength:{
                  value: 20,
                  message: "El nombre debe tener como maximo 20 caracteres"
                }
              })}
              value={datosUsuario.nombre} onChange={handleChange}
            />
            {
              errors.nombre && (<p className="invalid-feedback text-red-500 my-1">{errors.nombre.message}</p>)
            }
          </div>
          

          <div className="mb-3 input-group">
            <div className="input-group-text bg-info">
              <img src={svgNombreRegistro} alt="" className="imgRegistroFormulario" />
            </div>
            <input type="text" 
              className={`form-control ${errors.apellido ? "is-invalid" : ""}`} 
              placeholder="Apellido" name='apellido' aria-describedby="apellido" 
              {...register("apellido", {
                required:{
                  value: true,
                  message: "El apellido es requerido"
                },
                minLength: {
                  value: 3,
                  message: "El apellido debe tener un minimo de 3 caracteres"
                },
                maxLength:{
                  value: 20,
                  message: "El apellido debe tener como maximo 20 caracteres"
                }
              })}
              value={datosUsuario.apellido} onChange={handleChange} 
            />
            {
              errors.apellido && (<p className="invalid-feedback text-red-500 my-1">{errors.apellido.message}</p>)
            }
          </div>


          <div className="mb-3 input-group">
            <div className="input-group-text bg-info">
              <img src={svgCorreoRegistro} alt="" className="imgRegistroFormulario" />
            </div>
            <input type="email" 
              className={`form-control ${errors.correo ? "is-invalid" : ""}`} 
              placeholder="Correo" name='correo' aria-describedby="correo" 
              {...register("correo", {
                required:{
                  value: true,
                  message: "El correo es requerido"
                },
                pattern:{
                  value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:'El email proporcionado no es valido.'
                }
              })}
              value={datosUsuario.correo} onChange={handleChange} 
            />
            {
              errors.correo && (<p className="invalid-feedback text-red-500 my-1">{errors.correo.message}</p>)
            }
          </div>


          <div className="mb-3 input-group">
            <div className="input-group-text bg-info">
              <img src={svgContrasenaRegistro} alt="" className="imgRegistroFormulario" />
            </div>
            <input type="password" 
                className={`form-control ${errors.contrasena ? "is-invalid" : ""}`} 
                placeholder="Contraseña" name='contrasena' aria-describedby="contrasena"
                {...register("contrasena",{
                  required:{
                    value: true,
                    message: "La contraseña es requerida"
                  },
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener 8 caracteres minimo"
                  },
                  maxLength:{
                    value: 20,
                    message: "La contraseña debe tener como maximo 20 caracteres"
                  }
                })}
              value={datosUsuario.contrasena} onChange={handleChange} 
            />
            { 
              errors.contrasena && (<p className="invalid-feedback text-red-500 my-1">{errors.contrasena.message}</p>)
            }
          </div>


          <div className="mb-3 input-group">
            <div className="input-group-text bg-info">
              <img src={svgContrasenaRegistro} alt="" className="imgRegistroFormulario" />
            </div>
            <input type="password" 
                className={`form-control ${errors.confirmarContrasena ? "is-invalid" : ""}`} 
                placeholder="Confirmar contraseña" name='contrasena' aria-describedby="contrasena"
                {...register("confirmarContrasena", {
                  required:{
                    value: true,
                    message: "Debe re ingresar su contraseña"
                  },
                  validate: value => value === watch('contrasena') || 'Las contraseñas no coinciden' 
                })}
            />
            {
              errors.confirmarContrasena && (<p className="invalid-feedback text-red-500 my-1">{errors.confirmarContrasena.message}</p>)
            }
          </div>

          <div className="mb-3 input-group">
            <div className="input-group-text bg-info">
              <img src={svgTelefonoRegistro} alt="" className="imgRegistroFormulario" />
            </div>
            <input type="tel" 
              className={`form-control ${errors.telefono ? "is-invalid" : ""}`} 
              placeholder="Telefono" name='Telefono ej: 3816344240' aria-describedby="telefono" 
              {...register("telefono", {
                required:{
                  value: true,
                  message: "El telefono es requerido"
                },
                length: {
                  value: 8,
                  message: "Telefono ingresado no valido, debe tener 8 caracteres"
                }
              })}
              value={datosUsuario.telefono} onChange={handleChange} 
            />
            {
              errors.telefono && (<p className="invalid-feedback text-red-500 my-1">{errors.telefono.message}</p>)
            }
          </div>

          <input type="hidden" 
            {...register("rol",{
              value: "usuario"
            })}
          />

          <div className='d-flex flex-column justify-content-center '>
            <button type='submit' className='btn btn-info mb-4 text-white'>Registrarse</button>
          </div>
        </form> */}
      </div>
      {/*</Modal.Body>*/}
    </Modal>
  )
}


export default ModalRegistro