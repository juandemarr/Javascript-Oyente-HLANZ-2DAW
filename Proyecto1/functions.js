//funcion: parte de codigo con un nombre. Se le pueden pasar parametros
//ambitos de variables: global (var). Dentro de funcion aunq sea var su ambito es solo dentro de dicha funcion
//let o const declarada fuera de una funcion, dentro no sirve

function saludo(nombre){
    //console.log("Hola " + nombre);
    return `Hola ${nombre}`; //equivalente a concatenar
}

console.log(saludo("Juande"));

//EJ crear funcion con 3 params, decir cual es par
/*
function esPar(param1, param2, param3 = 1){//valor por defecto a param3
    let mensaje = "";

    if(param1 % 2 === 0)
        mensaje += `${param1} es par `; 
        //concatena a lo que tiene antes mensaje, undefined, por eso hay que definirlo como vacio
    if(param2 % 2 == 0)
        mensaje += `${param2} es par `;
    if(param3 % 2 == 0)
        mensaje += `${param3} es par `;
    if(mensaje === "")
        mensaje += "no hay numeros pares";
    
    return mensaje;
}
*/

//for of es equivalente a foreach

function esPar(){//arguments, array formado por cualquier parametro que se le pase
    let mensaje = "";
    for(let numero of arguments)
        if(numero % 2 === 0)
            mensaje += `${numero} es par `;
    
    return mensaje;
}
console.log(esPar(4,2,1));


//OPERADOR SPREAD
/*consiste en exapndir donde se esperaban los argumentos, 
principalmente para las llamadas a una funcion
...nombre
*/
Math.max(2,1,7);
let a = [2,1,7];
Math.max(a); //NaN
console.log(Math.max(...a));//transforma los elementos del array en texto, en un unico parametro que ya si se acepta

let b = [9,11,15];
console.log(Math.max(...a,90,...b));

//en funciones
let c=[1,2];
function suma(a,b){
    return a + b;
}
console.log(suma(...c));


//Clonar un array

const n1 = [1,2,3];
const n2 = n1; //si se declara n2 como vacio, luego no se le puede asignar un nuevo array
//si se modifica en uno tbn se modifica en el otro, al ser por referencia

//Clonacion
let nn2 = [...n1] //nn2 es un array con los valores originales de n1, no apunta a su referencia


//FUNCIONES FLECHA (ARROW) (funciones anonimas)
let suma1 = (a,b) => { return a + b }; //la variable suma tiene esa funcion dentro
let suma2 = (a,b) =>  a + b ; //retorno directo, sin llaves ni return
suma2(2,3); //para llamarla al ser funcion, con sus parentesis

let hola = () => {return "Hola mundo"};

//funcion que al pasarle tres numeros me diga el mayor
let maximo = (a,b,c) => {
    // v1 --> return Math.max(a,b,c);
    // v2 --> if
    // v3 --> for of arguments no sirve para las funciones flecha, pero sí si se emten los argumentos con spread en un array
    let max = 0;
    let array = [a,b,c];
    //v3_1
    for (let i = 0 ; i < array.length; i++){ //tbn con for(let p of array)
        if (max < array[i])
            max = array[i];
    }    
    return "El máximo es: " + max;
}

console.log(maximo(4,2,9));

///////////////////////////////

let miSuma2 = (a,b) => {
    console.log("Voy a sumar: ");
    return a + b;
};

miSuma2(3,5);


//MAP, con funcion arrow. Crea un array con los resultados
//Aplicar a cada elemento del array lo que quiera, como una funcion, detras de map. Ahorra usar el bucle
let c1 = [0,1,2,3,4];
let c2 = c1.map( (a) => {
    return Math.pow(a,2);
});

console.log("MAP");
console.log(c2);

//Match.pow(numeroAElevar,2)
//raiz cubica Math.pow(a,1/3)


//CONVERSION DE TIPOS
/*
parseInt(9.99) //te quedas con la parte entera
parseFloat("9.99")//Devuelve el numero 9.99
Number("")//Devuelve el numero 0
String(9)//Devuelve la cadena de texto 9
*/

//i++
//++i //Primero suma despues asigna;
