import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ContextoTurnos from './components/Context/TurnosContext.jsx';
import ContextoUsuarios from './components/Context/UsuariosContext.jsx';
import PieDePagina from './components/piedepagina/piedepagina';
import Header from './components/header/header';
import MascotasContext from './components/Context/MascotasContext.jsx';


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