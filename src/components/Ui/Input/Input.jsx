import React from 'react'

export const Input = ({labelText, placeh, idInput, event}) => {
  return (
    <div>
      <label className='placeh' htmlFor="">{labelText}</label>
      <input onKeyDown={event} id={idInput} placeholder={placeh} ></input>
    </div>
    
  )
}
