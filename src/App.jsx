
import './App.css'
import HelloWorld from './HelloWorld'
import Button from './Button'
import HelloPerson from './HelloPerson'
import { useState } from 'react'

function App() {
  const[nome,setNome] = useState("");
  const pessoas =[
    {
      nome:"Daniel",
      idade:"50",
      caracteristicas:"Maromba",
      foto:"https://picsum.photos/200"
    },
    {
      nome:"Jorginho",
      idade:"25",
      caracteristicas:"MAGRO",
      foto:"https://picsum.photos/200"
    },
    {
      nome:"Paulo",
      idade:"17",
      caracteristicas:"baixinho",
      foto:"https://picsum.photos/200"
    },
    {
      nome:"sidnei",
      idade:"20",
      caracteristicas:"FEIO",
      foto:"https://picsum.photos/200"
    }
  ];
  
  return (
    <div>
      <input type="text" onChange={ (event) => {setNome(event.target.value)}}/>
      <HelloWorld />
      <Button />
      {pessoas.map((pessoa, key) => {
          return <HelloPerson 
           key={key}
           nome={pessoa.nome}
           idade={pessoa.idade}
           caracteristicas={pessoa.caracteristicas}
           foto={pessoa.foto}
           />
      })}
      
    </div>
  
  )
}

export default App
