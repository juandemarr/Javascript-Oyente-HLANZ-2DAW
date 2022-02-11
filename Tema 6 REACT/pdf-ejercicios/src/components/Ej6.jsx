import React, { useEffect, useState } from 'react'
import Ej6_2 from './Ej6_2';

const Ej6 = () => {

    const [input, setInput] = useState("");

    function guardarValor(e){
        setInput(e.target.value);
        
    }
    useEffect(()=>{
        //console.log(input)
    },[input])

    return (
        <div>
            <h2>Pasar contenido del input a otro componente</h2>
            <input type="text" onChange={guardarValor}></input>
            <Ej6_2 valor={input}/>
        </div>
    )
}

export default Ej6