import React, {useState} from 'react'
import { Boton } from '../../Ui/Buttom/Boton';
import { Contador } from '../../Ui/Contador/Contador';


export const DivContador = () => {
  const [contador, setcontador] = useState(0);
  const sumar = () => setcontador(contador +1)
  const restar = () => setcontador(contador -1)
  const reset = () => setcontador(0)

  return (
    <>
      <div className='cont'>
        <div className='count' ><Contador styles={"counter"} textContent={contador}/></div>
        <nav className='btns' > 
          <Boton styles={"btn1"} event={sumar} textButtom={"sumar"}/>
          <Boton styles={"btn2"} event={reset} textButtom="reset"/>
          <Boton styles={"btn3"} event={restar} textButtom="restar"/>
        </nav>
      </div>
      
    </>
  )
}

