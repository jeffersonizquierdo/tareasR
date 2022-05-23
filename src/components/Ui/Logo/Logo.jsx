import React from 'react'
import image from "../../../images/fondoSolpng.png"

export const Logo = ({id}) => {
  return (

    <img className='image' id={id} src={image} alt='Logo' ></img>
  )
}

