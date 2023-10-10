import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ProductosContexto from './components/context/ProductosContext';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import PieDePagina from './components/piedepagina/piedepagina';
import Header from './components/header/header';
import MascotasContext from './components/Context/MascotasContext';


const App = () => {


  return (
    <>



      <ContextoUsuarios>
        <MascotasContext>
          <ContextoTurnos>
            <ProductosContexto>
              
              <Header />
              <Rutas />
              <PieDePagina />
              
            </ProductosContexto>
          </ContextoTurnos>
        </MascotasContext>
      </ContextoUsuarios>


    </>
  );
};

export default App;