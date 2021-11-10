console.log("THIS IS THE WAY");

/*
    Tipos de datos primitivos (no tienen metodos ni propiedades)
        undefined, null, boolean, string, number, NaN, Symbol
        string lo convierte a objeto string automaticamente al usar propiedades como length sobre el
    propiedades sin parentesis
    metodos con parentesis
    
        Simbologia camelCase
*/

//tipo de dato de una variable typeof variable;

//Primero declarar con const(se declara en MAYUSCULA en primitivas, no compuestas), luego let y por ultimo var. 
//const no deja modificar variables primitivas, pero si compuestas como objetos. Puede modificar su contenido (como un bote de gel) pero no cambiarse todo por otro valor.

//No usar la misma variable para cambiar su valor, crear nuevas

var variableGlobal = 10; //segun donde se declare. Sin valor es undefined
variableGlobal = "10"; //con comillas dobles o simples se declara string
var variableB;
variableB = variableGlobal;

console.log(variableGlobal + ' ' + variableB);
//entre cero da infinito

let variableLocal;


const constante = 0; //las constantes necesitan un valor siempre

//EJ
/* var nombre = prompt("Introduce tu nombre: ");
console.log(nombre); */

// \t añade un tabulador
// \n retorno de carro

var nombre2 = '\"Juande\"';
console.log(nombre2);
console.log("Tu nombre tiene " + nombre2.length + " caracteres");
console.log(nombre2[nombre2.length - 1]);

//los strings son inmutables, no se pueden cambiar sus valores por otros

// "3" == 3 true
// "3" === 3 false tiene en cuenta el tipo de variable




