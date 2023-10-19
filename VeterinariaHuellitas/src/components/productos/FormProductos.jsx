

const FormProductos = () => {

    const { registrarUsuario } = useContext(ContextoUsuarios);

    const [productos, setProductos] = useState({
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
        setMascotas({ ...mascotas, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      };

    return (
        <>
            <form onSubmit={handleSubmit}>


                <div className=''>
                    <label htmlFor='marca' className=''>Marca</label>
                    <input
                        type='email'
                        className=''
                        name='marca'
                        value={marca}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder='Marca del producto.'
                        required
                    />
                </div>

                <div className=''>
                    <label htmlFor='tipo' className=''>Tipo</label>
                    <input
                        type='text'
                        className=''
                        name='tipo'
                        value={tipo}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Tipo de producto.'
                        required
                    />
                </div>

                <div className=''>
                    <label htmlFor='precio' className=''>Precio</label>
                    <input
                        type='number'
                        className=''
                        name='precio'
                        value={precio}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Precio del producto.'
                        required
                    />
                </div>

                <div className=''>
                    <label htmlFor='imagen' className=''>Imágen</label>
                    <input
                        type='text'
                        className=''
                        name='imagen'
                        value={imagen}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Imágen del producto.'
                        required
                    />
                </div>

                <div className='d-flex flex-column justify-content-center mt-2'>
                    <button type='submit' className='btn btn-info mb-2 text-white'>Cargar Producto</button>
                </div>

            </form>
        </>
    )
};

export default FormProductos;