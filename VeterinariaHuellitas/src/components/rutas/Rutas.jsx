import { Routes, Route } from "react-router-dom";
// import RegistroProductos from "../registroProductos/RegistroProductos";
import PaginaPrincipal from "../../pages/paginaPrincipal/PaginaPrincipal";
import Administracion from "../../pages/administracion/Administracion";
import DetallePlanes from "../../pages/detallePlanes/DetallePlanes";

const Rutas = () => {
    return(
        <Routes>
            <Route path="/home" element={<PaginaPrincipal />}/>
            {/* <Route path="/registroProductos" element={<RegistroProductos />}/> */}
            <Route path="/detallesDePlanes" element={<DetallePlanes />}/>
            <Route path="/administracion" element={<Administracion />}/>
        </Routes>

    )
}

export default Rutas