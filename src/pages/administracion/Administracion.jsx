import TablaMascotas from "../../components/tablas/TablaMascotas";
import TablaTurnos from "../../components/tablas/TablaTurnos";
import TablaUsuarios from "../../components/tablas/TablaUsuarios";
import "./administracion.css"


const Administracion = () => {
    return (
        <>
            <div className="containerAdministracion">

                <h1 className="d-flex justify-content-center tituloPagAdm">ADMINISTRACION</h1>
                <TablaTurnos />
                <TablaUsuarios />
                <TablaMascotas />
            </div>
        </>
    );
};

export default Administracion;