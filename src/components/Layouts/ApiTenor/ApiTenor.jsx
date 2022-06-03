import React, { useEffect, useState } from 'react'


export const ApiTenor = () => {

    const container = document.getElementById('container')

    const [mode, setMode] = useState([])

   

    const custonmGif = (event) =>{

        const container = document.getElementById('container')
        container.innerText = ""

        const URL = "https://g.tenor.com/v1/search?";
        const key = "QQO4FEBQNWYA";
        const query = `q=${event.target.value}`;
        const limit = "&limit=10";  

        fetch(`${URL}${query}&key=${key}${limit}`)
        .then(response => response.json())
        .then(data => {
            setMode(data) 
            createGif(data)
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
        <main id='container'>



        </main>
    </div>
  )
}
