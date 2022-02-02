//cosas de js necesarias:
/////////////////1. template literals
const nombre1 = "Carlos";
const apellidos1 = "García";
console.log(`${nombre1} - ${apellidos1}`)

//cear componente en REACT
function Componente ( {backgroundColor} ){
    return (
        <div className = {` `}></div> //esto es jsx
    )
}

///////////////2. short and property names (acortadores de nombres)
const nombre = "Carlos";
const apellidos = "García";
const edad = 38;

const alumno = {
    nombre : nombre,
    apellidos : apellidos,
    edad : edad, //buena practica ponerle al ultimo tbn coma, por si se añaden mas a futuro
}
//acortamiento de nombre, solo cuando coinciden ambos nombre
const alumno = {nombre,apellidos,edad,}

////////////////3. Arrow functions
const datos = () => {
    return "hola"
}
//si devuelve una sola linea, se pondria sin llaves ni return
const datos = () => "hola"

///////////////4. Destructuring
const figura = {
    x:10,
    y:20,
};

//calculo area de la figura
function area(figura){
    return (figura.x * figura.y);
}
area(figura);

//con destructuring, llaves con espacio dentro
function area2(figura){
    const { x , y } = figura; //puede haber mas atributos en el objeto, solo cogeria los dos primeros
    return x * y;
}

const area3 = ({ x, y }) => x * y;
area3(figura);

///////////////
const nuevaPersona = {//destructuring del objeto persona, cogiendo todo lo que contiene el objeto persona, 
                    //y renombrando la clave nombre
    ...persona,
    nombre:"Lucas"
}

const { nombre:nuevoNombre } = nueavPersona;
//crea una nueva variable nuevoNombre, con el contenido de la clave nombre del bjeto nuevaaPersona

//Destructuring de arrays, se usa corchetes no llaves, al ser un array
//persona.cursos es un array dentro de la clase Persona
const[primercurso, ...otrocursos] = persona.cursos
//otrocursos es un array con el resto de arrays

//Destructuring de parametros, usando el spread operator
const sumar = (...numeros) => numeros.reduce((total,num) => total + num, 0);
//reduce suma los lementos, total es el acumulador, num es el iterador,
// y el tercer parametro 0 indica desde que valor empiezo a sumar
console.log(sumar(1,3,5,6)); //devuelve 15

///////////5. paso de parametros por defecto
function suma(a = 0 , b = 0){
    return a + b;
}


////////////6. Spread operator y rest operator
const array = [1,2,3,4,5];
const otroArray = [6,7,8,9,10];

//antes para juntarlos se hacia
const nuevoArray = array.concat(otroArray);
//ahora con spread operator, el cual mete todos los valores que contenga llamando solo a esa variable
const array = [...array , ...otroArray];

//con objetos seria
const obj1 = {
    a : "a",
    b : "b",
};
const obj2 = {
    c : "c",
    d : "d",
};

//antes
const nuevoObejto = Object.assign({}, obj1,obj2);
//ahora
const nuevoObjeto = {...obj1, ...obj2};


//////////////7. Módulos en ECMAScript 6
//export: hacer que una funcion sea visibe desde fuera del fichero, para poder usarla
export default function suma(a,b){
//solo puede aparecer 
}

export function suma(a,b){

}
//para importar por defecto, se importa todo, para nombrar otra funcion sera suma.suma2, suma.suma
import suma from "./suma" //si el fichero se llama suma.js
                          // el nombre destras de import es el que queramos
                          //para as rutas siempre empezar con ./  el .js no hace falta
import {resta,otras} from "./suma"; //importa el nombre de cada funcion entre llaves
//NO USAR EL DEFAULT

import React, {useState, useEffect, Fragment} from "react" //al estar instalado por npm no hay que indicar ruta


////////////8. Operador condicional ternario
const coche = {
    marca : "Peugeot",
    modelo : "207",
};

let modeloNew = ccoche.model ? coche.model : "X";
//delante de ? es la condicion de comprobacion, si es afirmativo, es decir tiene contenido, se le asigna lo
//primero, delante de los : sino, si es undefined (esta vacio) coge la segunda parte, la derecha de los :


/////////////9. Promise / async await
//visto antes


////////////10. nullish coalescing operator (??)
//operador de fusion nula, si es nulo o undefined coge el valor de la derecha de los :, sino coge el de la izq
function suma(a,b){
    a = a == null ? 0 : a; //si a es nulo entonces pon cero, sino valdra a
    b = b == null ? 0 : b;

    return a + b;
}

//mejorado con ??
function suma(a,b){
    a = a ?? 0; //a ?? 0 significa que si la var a es null o undefined valdra la parte de la derecha, 0,
                // sino valdra la parte de la izq, a
    b = b ?? 0;

    return a + b;
}
suma(2);

////////////////////11. Optional chaining
//si una clave no existe en un nuevoObjeto, evita que de error

const persona = {
    name : "Gerardo",
    email : "a@a",
}
const titulo = persona?.trabajoActual?.titulo;
//de no existir, daria undefined en lugar de petar
//en el ultimo no hay que poner ?, ya que de no existir da undefined, se ponen en la ruta por si falla antes
//al final se ocmprobara el valor


///////////////////////12. Metodos importante de arrays a dominar
//find() y findIndex() necesitan una callback (funcion arrow)
var a = ["juan", "pepe"];
a.find( (nombre) => nombre === "juan");

a.find( (nombre) => nombre != "pepe");

a.filter( (nombre) => nombre.includes("ju")); //si contiene ju

a.filter( (nombre) => !nombre.includes("ju")); //que no contenga

//la diferencia entre find y filter es que find devuelve SOLO la primera ocurrencia, fitler lo devuelve todo

//some()
//includes()
//every()
//map()*****
//filter()****
//reduce()****
//forEach()
//flat() y flatMap()



