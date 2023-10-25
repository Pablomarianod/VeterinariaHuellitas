import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ProductosContexto = createContext()

const ProductosContext = ({ children }) => {
    const [productos, setProductos] = useState([])



    //POST

    const agregarProducto = async (producto) => {
        try {
            await axios.post("https://huellitas-backend.vercel.app/api/producto", producto);

            setProductos([...productos, producto])

        } catch (error) {
            console.log(error)
        }
    };

    //PUT

    const modificarProducto = async (producto) => {
        try {
            await axios.put(`https://huellitas-backend.vercel.app/api/producto/${producto._id}`, producto);
            await mostrarProductos();
        } catch (error) {
            console.log(error)
        }
    };

    //DELETE

    const eliminarProducto = async (id) => {

        try {
            await axios.delete(`https://huellitas-backend.vercel.app/api/producto/${id}`);
            const eliminarProducto = productos.filter((producto) => producto.id !== id);
            setProductos(eliminarProducto);
            await obtenerProductos();
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <ProductosContexto.Provider value={{ productos, setProductos, agregarProducto, modificarProducto, eliminarProducto }}>
            {children}
        </ProductosContexto.Provider>
    )
}
export default ProductosContext