import React, {useEffect, useState} from 'react'
import { Boton } from '../../Ui/Buttom/Boton';
import { Contador } from '../../Ui/Contador/Contador';
import { Logo } from '../../Ui/Logo/Logo';


export const DivContador = () => {
  const [contador, setcontador] = useState(0);
  const sumar = () => setcontador(contador +10)
  const restar = () => setcontador(contador -10)
  const reset = () => setcontador(0)

  

  useEffect(() => {
    
    if (contador >= 100 || contador<= -100){

      document.getElementById("image").classList.remove("Logo")
      document.getElementById("image").classList.add("image")

    } else {

      document.getElementById("image").classList.remove("image")
    }

  }, [contador]) 

  return (
    <>
      <div className='cont'>
        <div className='count' ><Contador styles={"counter"} textContent={contador}/></div>
        <Logo id="image" />
        <nav className='btns'>
          <Boton styles={"btn1"} event={sumar}  textButtom={"sumar"}/>
          <Boton styles={"btn2"} event={reset} textButtom="reset"/>
          <Boton styles={"btn3"} event={restar} textButtom="restar"/>
        </nav>
      </div>
      
    </>
  )
}

