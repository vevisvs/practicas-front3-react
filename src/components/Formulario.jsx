import React from 'react'
import { useState } from 'react'

const Formulario = () => {

    const [user, setUser] = useState({
        name: '',
        password: '',
    })

    const handlerSubmit = (e) => {
        e.preventDefault()
        if(user.name.length > 3 && user.password.length > 5){
            alert("Formulario enviado")
        }
    }

  return (
    <div>
        <form onSubmit={handlerSubmit}>
            <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
            {user.name}
            <input type="password"  onChange={(e) => setUser({...user, password: e.target.value})}/>
            {user.password}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Formulario