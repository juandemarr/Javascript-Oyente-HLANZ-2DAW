import React, { useState,useEffect } from 'react';

const EstadosFuncionales = () => {
    //Codigo funcional de trabajo
        //crear un estado en React a traves de componentes funcionales
        const [contador1,setContador1] = useState(0); //la primera variable de nombre que quiera, al lado el metodo setVar
                                                //useState(0) entre () el valor inicial
        const [contador2,setContador2] = useState(0);

        const handlerContador1 = (e) => {
            //return setContador1(contador1 + 1);//esto funciona el 95%
            return setContador1((prevEstado) => prevEstado + 1);//al 100%, pasandole una arrow function
        };//si abro llaves tengo que poner return, si abro parentesis no
        
        const handlerContador2 = (e) => {
            return setContador2((prevEstado) => prevEstado + 1);
        };
        
        const handlerContador2Restar = (e) => {
            return setContador2((prevEstado) => prevEstado - 1);
        };

    //2 hook: useEffect
    //useEffect se utiliza para realizar tareas que no tienen porque pintar en el DOM element. Hya que importarlo
    //cuando al final se ponen ,[] vacios significa que se ejecuta una sola vez al terminar de pintar el componente

    useEffect(() => {
        console.log("Se ejecuta al inicio");
    })

    useEffect(() => {
        console.log("Se ejecuta al inicio solo una vez");
    },[])

    useEffect(() => {
        console.log("Se ejecuta cuando modificas el state de contador1");
    },[contador1]);

    useEffect(() => {
        console.log("Se ejecuta cuando modificas el state de contador1 o contador2");
    },[contador1,contador2]);

    //pintamos el componente
    return(
        <div>
            {console.log("Pintando el componente")}
            <h1>Ciclo de vida</h1>
            <h2>clicks contador 1: {contador1}</h2>
            <h2>clicks contador 2: {contador2}</h2>
            <button onClick={handlerContador1}>Incrementar contador 1</button>
            <button onClick={handlerContador2}>Incrementar contador 2</button>
            <button onClick={handlerContador2Restar}>Decrementar contador 2</button>
        </div>
    );
};

export default EstadosFuncionales;
