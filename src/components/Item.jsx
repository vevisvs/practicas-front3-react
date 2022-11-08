import React from 'react'
import { useState } from 'react'

//el componente Item no tiene hijos
// ESTADO: Item debe tener un numero para almacenar la cantidad de stock, la misma se la define el padre a la hora de crearlo
// METODOS: Item debe manejar el click de su boton para restar la cantidad en stock de si mismo y a su vez poder aumentar el estado de su "abuelo App"
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y los metodos heredados para su uso

//maqueta de Item:
//h3
//p
//h5 > span (este span debe mostrar la cantidad si es mayor a 0 y "agotado si llega a 0")
//button (este boton debe permitir comprar, pero si la cantidad es menor a 0, debe estar deshabilitado y decir: "sin stock")

const Item = ({producto, aumentar}) => {

  const [stock, setStock] = useState(producto.stock)

  const comprar = () => {
    setStock (stock - 1)
    aumentar()
  }

  return (
    <div className='producto'>
        <h3>{producto.producto.nombre}</h3>
        <p>{producto.producto.descripcion}</p>
        <h5>En stock: {stock > 0 ? stock : <span>agotado</span>}</h5>
        { stock > 0 ? <button onClick={comprar}>Comprar</button> : <button disabled>SIN STOCK</button>}
        {/* { <button disabled={stock === 0} onClick={comprar}>Comprar</button>} */}
    </div>
  )
}

export default Item