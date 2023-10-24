import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ContextoTurnos from './components/Context/TurnosContext';
import ContextoUsuarios from './components/Context/UsuariosContext';
import MascotasContext from './components/Context/MascotasContext';
import PieDePagina from './components/piedepagina/piedepagina';
import Header from './components/header/header';


const App = () => {


  return (
    <>


      <ContextoUsuarios>
        <MascotasContext>
          <ContextoTurnos>
              
              <Header />
              <Rutas />
              <PieDePagina />
              
          </ContextoTurnos>
        </MascotasContext>
      </ContextoUsuarios>


    </>
  );
};

export default App;