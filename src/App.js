import './App.css';
//importamos nuestros componentes 
import Ver from './componentes/ver';
import Crear from './componentes/crear';
import Editar from './componentes/editar';
import Servicio from './componentes/servicio';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ver />} />
          <Route path='/crear' element={<Crear />} />
          <Route path='/servicio' element={<Servicio />} />
          <Route path='/editar/:id' element={<Editar />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
