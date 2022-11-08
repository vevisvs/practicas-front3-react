import React from 'react'
/*import Article from './Article'*/
import { useState } from 'react'


const Shopdashboard = (props) => { // ({titulo}) desestructurando

    const [productoSelected, setProductSelected] = useState()
    const [discountSelected, setDiscountSelected] = useState()

    let lista = [
        {id: 1, producto: 'Remera', precio: 2500},
        {id: 2, producto: 'Campera', precio: 4000},
        {id: 3, producto: 'Pantalon', precio: 8000},
    ]

    const product = lista.find(item => item.producto === productoSelected)

    return (
        <div>
            <h1>Bienvenido al {props.titulo}</h1> 
            {/*lista.map(item => <Article key={item.id} producto={item}/>)*/}

            <form> 
                <select name="" id="" onChange={(e) => setProductSelected(e.target.value)}>
                    <option value=""></option>
                    {lista.map(item => <option value={item.producto}>{item.producto}</option>)}
                </select>
                <h3>Producto seleccionado: {productoSelected} - ${product?.precio}</h3>

                <select name="" id="" onChange={(e) => setDiscountSelected(e.target.value)}>
                    <option value={10}>10%</option>
                    <option value={20}>20%</option>
                    <option value={30}>30%</option>
                </select>
                <h3>Descuento seleccionado: {discountSelected}</h3>
                <h1>${product?.precio - product?.precio * discountSelected / 100}</h1>
            </form>
        </div> 
    )
}

export default Shopdashboard


