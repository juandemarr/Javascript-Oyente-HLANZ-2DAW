import React from 'react';

const Boton = () => {
    let pintado = false;

    function handleBgColor(){
        pintado = !pintado;
        if(pintado)
            document.querySelector("body").style.backgroundColor="#abb8c3";
        else
            document.querySelector("body").style.backgroundColor="#fff";
    }

    return (
        <div>
            <button onClick={handleBgColor}>Click me!</button>
        </div>
    );
};

export default Boton;
