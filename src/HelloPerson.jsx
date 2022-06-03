import { useState } from "react";
import './HelloPerson.css'

function HelloPerson({ nome, idade, foto, caracteristicas }) {
    const[frase, setFrase] = useState("");
    return (
        <div className="supra">
            <h1>{frase}</h1>
            <input onChange={(event)=> {setFrase(event.target.value)}}/>
            {nome && 
            <p>Hello {nome}-{idade}-{caracteristicas}</p>
            }
            
            <img
                src={foto}
                alt={nome}
            />

        </div>
    );
}
export default HelloPerson;