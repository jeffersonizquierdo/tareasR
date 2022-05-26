import React, { useState } from 'react'
import { Boton } from '../../Ui/Buttom/Boton'
import { useEffect } from 'react'

export const DarkMode = () => {

  const [tittle, setTittle] = useState("off")
  const [modeDark, setMode] = useState(false)

  const backgorund =  () =>{

    setMode(!modeDark)
  }


  useEffect(() => {
    
    if (modeDark){

      document.body.classList.remove("dark")
      document.body.classList.add("light")
      setTittle("of")

    } else {
      document.body.classList.remove("menu")
      document.body.classList.add("dark")
      setTittle("on")
    }

  }, [modeDark])


  return (

    <Boton event={backgorund} textButtom={tittle} ></Boton>
 

  )
}
