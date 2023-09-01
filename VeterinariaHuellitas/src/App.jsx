import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas';
import ProductosContexto from './components/context/ProductosContext';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoMascotas from './components/context/MascotasContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import PieDePagina from './components/piedepagina/piedepagina';
import { useState } from 'react'
import UsuariosContexto from './components/Context/UsuariosContexto.jsx'
import Header from './components/header/header';

const App = () => {
  

  return (
    <>
    <UsuariosContexto>

      <ContextoMascotas>
        <ContextoUsuarios>
          <ContextoTurnos>
            <ProductosContexto>
              <Header />

              <Rutas />
              
              <PieDePagina />
            </ProductosContexto>
          </ContextoTurnos>
        </ContextoUsuarios>
      </ContextoMascotas>
    </UsuariosContexto>

    </>
  );
};

export default App;