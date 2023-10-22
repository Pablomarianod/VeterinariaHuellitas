import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ProductosContexto from './components/Context/ProductosContext';
import ContextoTurnos from './components/Context/TurnosContext';
import ContextoUsuarios from './components/Context/UsuariosContext';
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