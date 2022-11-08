import React from 'react'

const Article = ({producto}) => { //desestructurado
  return (
    <>
        <h1>{producto.producto}</h1>
        <h2>{producto.precio}</h2>
    </>
  )
}

export default Article