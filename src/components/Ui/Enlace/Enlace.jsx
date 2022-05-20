import React from 'react'

export const Enlace = (text, style, direction) => {
  return (
    <div className={style} > <a href={direction}>{text}</a> </div>
  )
}
