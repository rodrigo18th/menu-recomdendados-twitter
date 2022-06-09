import { useState } from "react";

function Button() {
    const [contador, setContador] = useState(0);

    function visistar() {
        setContador(contador + 1);
    }
    function zerar() {
        setContador(0);
    }
    return (
        <div>
            <h1>Conatador de visitas: {contador}</h1>
            <button onClick={visistar}>Click-me</button>
            <button onClick={() => { setContador(0) }}>Zerar</button>
        </div>
    );
}
export default Button;