import React from 'react'
import { Link } from 'react-router-dom'

export const MenuNavigation = () => {
  return (

    <div>
      <Link className='' to={"/contador"}> Counter </Link>
      <Link className='' to={"/rickAndMorty"}> Rick And Morty </Link>
      <Link className='' to={"/Mailer"}>Mailer</Link>
    </div>
  )
}
