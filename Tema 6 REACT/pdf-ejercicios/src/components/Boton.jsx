import React from 'react';

const Boton = () => {
    function handleBgColor(){
        document.querySelector("body").style.backgroundColor="#abb8c3";
    }

    return (
        <div>
            <button onClick={handleBgColor}>Click me!</button>
        </div>
    );
};

export default Boton;
