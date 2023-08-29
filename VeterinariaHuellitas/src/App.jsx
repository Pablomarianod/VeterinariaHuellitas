import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ProductosContexto from './components/context/ProductosContext';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoMascotas from './components/context/MascotasContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import EstructuraNavbar from './components/header/Header'
import PieDePagina from './components/piedepagina/Piedepagina'

const App = () => {

  return (
    <>

      <ContextoMascotas>
        <ContextoUsuarios>
          <ContextoTurnos>
            <ProductosContexto>
              <EstructuraNavbar />
              <Rutas />
              <PieDePagina />
            </ProductosContexto>
          </ContextoTurnos>
        </ContextoUsuarios>
      </ContextoMascotas>

    </>
  );
};

export default App;