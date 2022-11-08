import { useState } from "react"

const PruebasHooks = ({contador, setContador}) => {

    const [img, setImg] = useState("")

  return (
    <div>
        <h4>{contador}</h4>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button onClick={() => setContador(contador - 1)}>Disminuir</button>

        <button onClick={() => setImg("https//:www.imagen.com")}>Traer imagen</button>
        <img src={img} alt="" />
    </div>
  )
}

export default PruebasHooks