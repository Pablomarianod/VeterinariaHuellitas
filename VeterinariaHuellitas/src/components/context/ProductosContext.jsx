import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ProductosContexto = createContext()



const ProductosContext = ({ children }) => {


    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const response = await axios.get("http://localhost:8080/productos")
            setProductos(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProductos()
    }, [])


    return (
        <ProductosContexto.Provider value={{ productos, setProductos, getProductos }}>
            {children}
        </ProductosContexto.Provider>
    )
}
export default ProductosContext