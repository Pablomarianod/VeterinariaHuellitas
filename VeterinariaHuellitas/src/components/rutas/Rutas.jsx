import { Routes, Route, Navigate } from "react-router-dom";
// import RegistroProductos from "../registroProductos/RegistroProductos";
import PaginaPrincipal from "../../pages/paginaPrincipal/PaginaPrincipal";
import Administracion from "../../pages/administracion/Administracion";
import DetallePlanes from "../../pages/detallePlanes/DetallePlanes";
import Error404 from "../../pages/Error404/Error404";
import Sobrenosotros from "../../pages/sobrenosotros/Sobrenosotros";
import PaginaContacto from "../../pages/paginaContacto/PaginaContacto";
import MisMascotas from "../../pages/MisMascotas/MisMascotas"
import { useContext } from "react";
import { ContextoUsuarios } from '../Context/UsuariosContext';

const Rutas = () => {
    const { usuarioLogueado } = useContext(ContextoUsuarios);
    console.log("Rol del usuario:", usuarioLogueado.rol);
    return (
        <Routes>
            <Route exact path="/" element={<PaginaPrincipal />} />
            {/* <Route path="/registroProductos" element={<RegistroProductos />}/> */}
            <Route path="/detallesDePlanes" element={<DetallePlanes />} />
            <Route path="/administracion" element={<Administracion />} />
            
            {/* {usuarioLogueado.rol === "admin" ? (

                <Route path="/administracion" element={<Administracion />} />
            ) : (
                <Route path="/login" element={<Navigate to="/login" replace />} />
            )} */}

            <Route path="/*" element={<Error404 />} />
            <Route path="/sobreNosotros" element={<Sobrenosotros />} />
            <Route path="/paginaContacto" element={<PaginaContacto />} />
            <Route path="/misMascotas" element={<MisMascotas />} />
        </Routes>


    )
}

export default Rutas