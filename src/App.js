import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Shopdashboard from './components/Shopdashboard';
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'
import Formulario from './components/Formulario';

//estado: app debe manejar en su estado un numero para contabilizar el total de elementos comprados
//métodos: App debe tener un método para aumentar este numero y q pueda ser ejecutado por nu nieto "Item"
//props: App deberá pasar por props lo necesario a sus componentes internos.

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const aumentar = () => {
    setTotal(total + 1)
  }

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card />
      <button onClick={() => setCount((previo) => previo + 1)}>count is {count}</button>
      <Shopdashboard titulo='Shop Dashboard'/>
      <Cabecera total={total}/>
      <Listado aumentar={aumentar} />
      <Formulario />
    </div>
  );
}

export default App;
