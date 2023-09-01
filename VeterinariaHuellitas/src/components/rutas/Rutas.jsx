import { Routes, Route } from "react-router-dom";
// import RegistroProductos from "../registroProductos/RegistroProductos";
import PaginaPrincipal from "../../pages/paginaPrincipal/PaginaPrincipal";
import Administracion from "../../pages/administracion/Administracion";
import DetallePlanes from "../../pages/detallePlanes/DetallePlanes";
import Error404 from "../../pages/Error404/Error404";
import Sobrenosotros from "../../pages/sobrenosotros/Sobrenosotros";
import PaginaContacto from "../../pages/paginaContacto/PaginaContacto";

const Rutas = () => {
    return(
        <Routes>
            <Route exact path="/" element={<PaginaPrincipal />}/>
            {/* <Route path="/registroProductos" element={<RegistroProductos />}/> */}
            <Route path="/detallesDePlanes" element={<DetallePlanes />}/>
            <Route path="/administracion" element={<Administracion />}/>
            <Route path="/*" element={<Error404 />}/>
            <Route path="/sobreNosotros" element={<Sobrenosotros />}/>
            <Route path="/paginaContacto" element={<PaginaContacto />}/>
        </Routes>
        

    )
}

export default Rutas