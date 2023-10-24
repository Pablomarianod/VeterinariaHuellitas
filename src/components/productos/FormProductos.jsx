import { useContext, useState } from "react";
import { ProductosContexto } from "../Context/ProductosContext";


const FormProductos = () => {

    const { agregarProducto } = useContext(ProductosContexto);

    const [productos, setProductos] = useState({
        marca: "",
        tipo: "",
        precio: "",
        imagen: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductos({ ...productos, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        agregarProducto(productos);

        setProductos({
            marca: "",
            tipo: "",
            precio: "",
            imagen: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>


                <div className=''>
                    <label htmlFor='marca' className=''>Marca</label>
                    <input
                        type='text'
                        className=''
                        name='marca'
                        value={productos.marca}
                        onChange={handleChange}
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
                        value={productos.tipo}
                        onChange={handleChange}
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
                        value={productos.precio}
                        onChange={handleChange}
                        placeholder='Precio del producto.'
                        required
                    />
                </div>

                <div className=''>
                    <label htmlFor='imagen' className=''>Imágen</label>
                    <input
                        type='file'
                        className=''
                        name='imagen'
                        value={productos.imagen}
                        onChange={handleChange}
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