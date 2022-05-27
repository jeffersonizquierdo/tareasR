/* eslint-disable no-restricted-globals */
import React, { useEffect, useState }  from 'react'
import { Input } from '../../Ui/Input/Input'
import { Card } from '../Card/Card';

export const RickAndMorty = () => {

  const input =document.getElementById("idRick") 
  const inputSearch =document.getElementById("")
  const card = document.getElementById("card")
  const url = "https://rickandmortyapi.com/api/character/?name="
  const [mode, setMode] = useState(false)

  function run (){

    const tecla = event.keyCode;

    if (tecla == 13){
      change()
    }

  }

  const change =() => {
    setMode(!mode)
  }

  useEffect (() => {

    if (mode){
      filterCharacter(document.getElementById("idRick").value)
    }
  }, [mode])

  function filterCharacter(searching) {

    fetch(url+searching)
    .then (response => response.json())
    .then(data => {
  
        data.results.forEach(element=> {
            createCards(element.name, element.image, element.name)
            console.log(element.name);
        })
      }) 
  }


  function createCards(name, image, alt) {

    const card = document.getElementById("card")
    const imgCard = document.createElement("img")
    const nameCard = document.createElement("h2")
    const container = document.createElement("div")
    container.classList.add("container")
    nameCard.textContent = name
    imgCard.setAttribute("src", image)
    imgCard.setAttribute("atl", alt)
    container.appendChild(nameCard)
    container.appendChild(imgCard)
    card.appendChild(container)
  }

  function cleanPage (){

    while (card.lastChild) {
        card.removeChild(card.lastChild)
    }
    filterCharacter(inputSearch.value)
}

  return (
    <div>
      <Input id={"idRick"} placeh={"Buscar"} />

      <Card id={"card"} />

    </div>
  )
}
