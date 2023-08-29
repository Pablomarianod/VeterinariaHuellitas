import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ProductosContexto from './components/context/ProductosContext';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoMascotas from './components/context/MascotasContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import PaginaPrincipal from './pages/paginaPrincipal/PaginaPrincipal';
import EstructuraNavbar from './components/header/header'
import PieDePagina from './components/piedepagina/piedepagina'


const App = () => {


  return (
    <>
      {/* <PaginaPrincipal /> */}

      <ContextoMascotas>
        <ContextoUsuarios>
          <ContextoTurnos>
            <ProductosContexto>
              <Rutas />
              <EstructuraNavbar />
              <PieDePagina />
            </ProductosContexto>
          </ContextoTurnos>
        </ContextoUsuarios>
      </ContextoMascotas>

    </>
  );
};

export default App;
