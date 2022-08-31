import { useState } from 'react';
import {Cabecera} from './components/Cabecera'
import {Listado} from './components/Listado'



function App() {
  const [carrito, setCarrito] = useState (0)

  return (
    <div className="App">
      <Cabecera carrito= {carrito} />
      <Listado  carrito= {carrito} setCarrito= {setCarrito}/>
    </div>
  );
}

export default App;
