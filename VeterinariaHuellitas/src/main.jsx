import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MisMascotas from './pages/MisMascotas/MisMascotas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MisMascotas /> 
    <App />
  </React.StrictMode>,
)
