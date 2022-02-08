import React, { useState } from 'react';

const Temporizador = () => {
    const [contador,setContador] = useState();

   /*  setContador(60);

    setInterval(()=>{
        if(contador > 0)
            setContador(contador - 1);
    },1000); */

    return (
        <div>
            <h2>Temporizador</h2>
            {/* <p>{contador}</p> */}
        </div>
    );
};

export default Temporizador;
