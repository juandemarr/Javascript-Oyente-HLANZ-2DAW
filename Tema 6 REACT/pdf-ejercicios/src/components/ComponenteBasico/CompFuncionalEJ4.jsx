import React, { useState } from 'react';

const MyHelloComponentFunctional = () => {
    const [myText,setMyText] = useState("hello");

    const handleCambiarEstado = () => {
        setMyText("Juande");
    }

  return (
    <div>
        <h3>Componente funcional</h3>
        <h4>{myText}</h4>
        <button onClick={handleCambiarEstado}>Change text</button>
    </div>
  );
};

export default MyHelloComponentFunctional;
