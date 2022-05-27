import React from 'react'

export const Card = ({nameCharacter, src, alt, id}) => {
  return (

    <div>
      <h2>{nameCharacter}</h2>
        <img id={id} src={src} alt={alt}></img>
    </div>
  )
}
