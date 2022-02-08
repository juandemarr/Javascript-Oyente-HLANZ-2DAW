import React, { useState } from 'react';

const MyHelloComponentFunctional = () => {
    const [myText,setMyText] = useState("hello");

    const handleCambiarEstado = () => {
        setMyText("Juande");
    }

  return (
    <div>
        <h2>Componente funcional</h2>
        <h3>{myText}</h3>
        <button onClick={handleCambiarEstado}>Change text</button>
    </div>
  );
};

export default MyHelloComponentFunctional;
