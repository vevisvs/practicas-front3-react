import React from 'react'
import productos from './data.json'
import Item from './Item'


//debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada item
//el componente listado es el padre de varios item
// ESTADO: Listado no necesite manejar un estado
// METODOS: Listado no requiere de métodos
// PROPS: listado recibe el metodo para aumentar el estado de App y se lo pasa a cada uno de sus hijos


const Listado = ({aumentar}) => {
  return (
    <div className='container'>
        {productos.map(elemento => <Item key={elemento.id} producto={elemento} aumentar={aumentar}/>)}
    </div>
  )
}

export default Listado