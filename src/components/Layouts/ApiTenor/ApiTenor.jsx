import React, { useEffect, useState } from 'react'
import { Input } from '../../Ui/Input/Input'


export const ApiTenor = () => {

    const inputShearch = document.getElementById('inputGif')
    const container = document.getElementById('container')

    const [mode, setMode] = useState([])

    

    const custonmGif = (event, inputShearch) =>{

        const container = document.getElementById('container')
        container.innerText = ""

        const searchInput = inputShearch
        const URL = "https://g.tenor.com/v1/search?"+inputShearch;
        const key = "QQO4FEBQNWYA";
        const query = `q=${event.target.value}`;
        const limit = "&limit=20";  

        fetch(`${URL}${query}&key=${key}${limit}`)
        .then(response => response.json())
        .then(data => { createGif(data)
            setMode(data)
            console.log(data);
        })
    }
    window.addEventListener('load', custonmGif)

    const createGif = (data) =>{

        const container = document.getElementById('container')
        data.results.map( gif => {
            const imgCard = document.createElement("img");
            imgCard.classList.add("img-gif");
            imgCard.src = gif.media[0].mediumgif.url;
            container.appendChild(imgCard);
        })
    }
  return (
    <div>

        <Input id={'inputGif'} event={custonmGif} placeh={'Buscar'} />

        <main className='container' id='container'>

        </main>
    </div>
  )
}
