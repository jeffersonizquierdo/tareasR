import React from 'react'
import emailjs from '@emailjs/browser';

export const Mailer = () => {

  const sendEmail = (event) => {

    event.preventDefault();

    emailjs.sendForm('service_270jbap', 'template_60hszbu', event.target, 'vraW1vtbk2fJX_aSe')
    .then(response => alert('Correo enviado', response))
    .catch(erorr => alert('Erro al enviar', erorr))

  }

  return (
    <div className='form_div'>
     
     <h2> Contacts US </h2>
      <form  onSubmit={sendEmail} className='form'>
        <nav className='containerInput' >
          <label htmlFor="">Name</label>
          <input className='input1' type="text" name='userName' />
        </nav>
        
        <nav className='containerInput' >
          <label htmlFor="">Email</label>
          <input className='input1' type="text" name='userEmail' />  
        </nav>
        <nav className='containerInput' >
          <label htmlFor="">Meassage</label>
          <textarea className='inputArea' type="text" name='userMessage' id='' cols="30" rows="10" />
        </nav>

        


        <button className='btnSend' >Enviar</button>
      </form>
    </div>
  )
}
