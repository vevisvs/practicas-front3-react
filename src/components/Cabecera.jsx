import React from 'react'


//recibe de su padre App, la cantidad que va a mostrar dentro del span correspondiente
//el (span) mostrará la cantidad recibida por props

const Cabecera = ({total}) => {
  return (
    <div>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos: <span>{total}</span></p>
    </div>
  )
}

export default Cabecera