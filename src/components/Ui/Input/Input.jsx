import React from 'react'

export const Input = ({labelText, placeh, idInput}) => {
  return (
    <div>
      <label className='placeh' htmlFor="">{labelText}</label>
      <input id={idInput} placeholder={placeh} ></input>
    </div>
    
  )
}
