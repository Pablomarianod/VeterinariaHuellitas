import { Routes, Route, Navigate, resolvePath } from "react-router-dom";
// import RegistroProductos from "../registroProductos/RegistroProductos";
import PaginaPrincipal from "../../pages/paginaPrincipal/PaginaPrincipal";
import Administracion from "../../pages/administracion/Administracion";
import DetallePlanes from "../../pages/detallePlanes/DetallePlanes";
import Error404 from "../../pages/Error404/Error404";
import Sobrenosotros from "../../pages/sobrenosotros/Sobrenosotros";
import PaginaContacto from "../../pages/paginaContacto/PaginaContacto";
import MisMascotas from "../../pages/MisMascotas/MisMascotas"

const Rutas = () => {

    const usuarioIn = JSON.parse(localStorage.getItem("usuario"))
    const rolUsuario = usuarioIn ? usuarioIn.rol === "admin" : false;

    return (
        <Routes>
            <Route path="/administracion" element={rolUsuario ? <Administracion /> : <Navigate to="/error404" />} />
            <Route exact path="/" element={<PaginaPrincipal />} />
            {/* <Route path="/registroProductos" element={<RegistroProductos />}/> */}
            <Route path="/detallesDePlanes" element={<DetallePlanes />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/sobreNosotros" element={<Sobrenosotros />} />
            <Route path="/paginaContacto" element={<PaginaContacto />} />
            <Route path="/misMascotas" element={usuarioIn ? <MisMascotas /> : <Navigate to="/error404" />} />
        </Routes>
    )
}

export default Rutas