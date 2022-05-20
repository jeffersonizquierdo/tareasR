import React from 'react'

export const Boton = ( {styles, textButtom, event} ) => {
  return (

    <button onClick={event} className={styles} >{textButtom}</button>
    
  )
}
