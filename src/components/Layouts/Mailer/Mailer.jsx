import React from 'react'

export const Mailer = () => {

  return (
    <div className='form_div'>
     
     <h1> Contacts US </h1>
      <form  className='form'>
        <label htmlFor="">Name</label>
        <input type="text" name='userName' />
        <hr></hr>

        <label htmlFor="">Email</label>
        <input type="text" name='userEmail' />
        <hr></hr>

        <label htmlFor="">Meassage</label>
        <textarea type="text" name='userMessage' id='' cols="30" rows="10" />
        <hr></hr>

        <button>Send</button>
      </form>
    </div>
  )
}
