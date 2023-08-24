import { useState } from 'react';
import {Modal} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { usarUsuContext } from '../../Context/UsuariosContexto';

import svgNombreRegistro from '../../imagenes/username-icon.svg';
import svgCorreoRegistro from '../../imagenes/email.svg';
import svgContrasenaRegistro from '../../imagenes/password-icon.svg';
import svgTelefonoRegistro from '../../imagenes/phone-icon.svg';
import './ModalRegistro.css'



const ModalRegistro = ({show, handleClose}) =>{

  const {register, handleSubmit ,formState:{errors}, watch, reset} = useForm();
  const { registrar, errorRegistro} = usarUsuContext();

  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    telefono: "",
    rol: "usuario"
  }); 

  
  const handleChange = (evento) => {
    setDatosUsuario({...datosUsuario, [evento.target.name]: evento.target.value})
  }
  
  
  const onSubmit = handleSubmit( async (values) => {
    registrar(values);
    setDatosUsuario({nombre: "", apellido: "", correo: "", contrasena: "", telefono: "", rol: "usuario"})
    /*
    reset();
    handleCloseRegistro();
    Swal.fire('Su usuario se creo exitosamente', ':)', 'success');
    */
  })

  return(
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
         
        {
          errorRegistro.map((error, i) => {
            <div className='bg-red-500 p-2 text-white' key={i}> {error} </div>
          })
        }

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
        </form>
        </div>
      {/*</Modal.Body>*/}
    </Modal>
  )
}


export default ModalRegistro