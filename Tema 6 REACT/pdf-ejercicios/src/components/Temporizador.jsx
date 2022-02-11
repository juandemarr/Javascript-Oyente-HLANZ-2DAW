import React, { useEffect, useState } from 'react';

const Temporizador = () => {
    const [contador,setContador] = useState(60);

    useEffect(()=>{  //porque sin useEffect funciona tbn?, si setTimeout lo deberia de ejecutar una sola vez
        setTimeout(()=>{
            if(contador > 0)
                setContador(contador - 1);
        },1000);
    },[contador]);

    return (
        <div>
            <h2>Temporizador</h2>
            <p>{contador}</p>
        </div>
    );
};

export default Temporizador;
