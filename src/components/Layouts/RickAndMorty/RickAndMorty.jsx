/* eslint-disable no-restricted-globals */
import React, { useEffect, useState }  from 'react'
import { Input } from '../../Ui/Input/Input'
import { Card } from '../Card/Card';

export const RickAndMorty = () => {

  const URL = "https://rickandmortyapi.com/api/character"
  const card = document.getElementById("card")
  const input = document.getElementById("idRick")

  window.addEventListener("load", getCharacters)

  const [mode, setMode] = useState(false)

  const change = () =>{

    setMode(!mode)
  }
  
  useEffect(() => {
   
    if(mode){
      filterCharacter(document.getElementById("idRick").value)
    }else{

    }
  }, [mode])


  function getCharacters(){   

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.map(element => {
            console.log(element);
            createCard(element.name, element.image, element.name)
        });
    });
}

  function createCard (name, image, alt){
    const card = document.getElementById("card")
    const imgCard = document.createElement("img")
    const nameCard = document.createElement("h2")
    const container = document.createElement("div")
    container.classList.add("container")
    nameCard.textContent = name
    imgCard.setAttribute("src",image)
    imgCard.setAttribute("atl",alt)
    container.appendChild(nameCard)
    container.appendChild(imgCard)
    card.appendChild(container)

  }

  function cleanPage(){
    const input = document.getElementById("idRick")
    while (card.lastChild){
      card.removeChild(card.lastChild)
    }filterCharacter(input.value)
  }

  function filterCharacter(searching){

    document.getElementById("card").innerHTML=""
    const URLSearchCharacter = "https://rickandmortyapi.com/api/character/?name="
    fetch(URLSearchCharacter+searching)
    .then (response => response.json())
    .then(data => {

        data.results.map(element=> {
            createCard(element.name, element.image, element.name)
            console.log(element.name);
        })
    }) 

  }

  return (
    <div className='div'>
      <input id='idRick'  onKeyUp={change} placeholder="Buscar"/>

      <Card id='card' style={"card"} ></Card>

    </div>
  )
}
