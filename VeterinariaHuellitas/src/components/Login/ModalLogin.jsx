import {Form, Modal} from 'react-bootstrap';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UsuarioContexto } from '../../Context/UsuariosContexto';
import { usarUsuContext } from '../../Context/UsuariosContexto';
import ModalRegistro from '../Registro/ModalRegistro';
import gatoLogin from '../../imagenes/Gato-login.svg';
import perroLoginn from '../../imagenes/Perro-img-login.svg';
import imgUsuarioLogin from '../../imagenes/username-icon.svg'
import imgContraseñaLogin from '../../imagenes/password-icon.svg'
import './ModalLogin.css';



const ModalLogin = ({show, handleClose, handleShowRegistro}) => {
  const {register, handleSubmit ,formState:{errors}, watch, reset} = useForm();
  const { login, errorLogin} = usarUsuContext();

  const [correo, setCorreo] = useState();
  const [contrasenia, setcontrasenia] = useState();

  const {usuarios} = useContext(UsuarioContexto)
  
  const onSubmit = (evento) => {
    evento.preventDefault()
    try {
      const usuario = usuarios.find(usuario => usuario.correo === correo && usuario.contrasena === contrasenia)
      if(usuario){
        alert("usuario encontrado");
        localStorage.setItem("usuario", JSON.stringify(usuario))
        window.location.href = "/"; /*aqui colocamos la redireccion que se hara una vez que ingrese el usuario, hay que agregar en el path */
      }else{
        alert("usuario NO encontrado");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit2 = handleSubmit((data) => {
    login(data) 
  })

  const abrirRegistro = () =>{
    /*reset() */
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
              <img src={gatoLogin} alt="CaraDegato" className='alturaImagen'/>
              <img src={perroLoginn} alt="CaraDePerro" className='alturaImagen'/>
            </div>
            <h2 className='text-center mt-3'>Iniciar Sesión</h2>
          </div>
          <Modal.Body className='px-5'>

            {errorLogin.map((error, i) => (
              <div className='p-2 text-danger text-center' key={i}> {error} </div>
            ))}
            <form onSubmit={onSubmit2}>


              <div className="mb-3 input-group">
                <div className="input-group-text bg-info">
                  <img src={imgUsuarioLogin} alt="" className="imagenInputFormulario" />
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
                  
                />
                {
                  errors.correo && (<p className="invalid-feedback text-red-500 my-1">{errors.correo.message}</p>)
                }
              </div>

              <div className="mb-3 input-group">
                <div className="input-group-text bg-info">
                  <img src={imgContraseñaLogin} alt="" className="imagenInputFormulario" />
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
                  
                />
                { 
                  errors.contrasena && (<p className="invalid-feedback text-red-500 my-1">{errors.contrasena.message}</p>)
                }
              </div>

              <div className='d-flex flex-column justify-content-center mt-2'>
                <button type='submit' className='btn btn-info mb-2 text-white'>Iniciar Sesión</button>
              </div>
            </form>
          </Modal.Body>
          <div className='d-flex gap-1 justify-content-center'>
            <p>¿No tienes cuenta aun?</p>
            <a href='#' className='text-decoration-none fw-bold' onClick={abrirRegistro}>Crear cuenta</a> {/*Logra cerrar el from, ver si puede abrir otro */}
          </div>
          </div>
        </Modal>

      </>
  )
}

export default ModalLogin