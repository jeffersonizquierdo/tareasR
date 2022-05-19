import React, { useState } from 'react'

export const Contador = () => {

    const [contador, setcontador] = useState(0);
    const sumar = () => setcontador(contador +1)
    const restar = () => setcontador(contador -1)
    const reset = () => setcontador(contador === 0 )


  return (
    
    <div>
        <h2>Contador</h2>
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset} >reset </button>
        </div>
        <div>{contador}</div>
    </div>
  )
}
