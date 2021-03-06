import { array } from "prop-types";

//ARREGLOS O ARRAYS
var miArreglo = ["Nombre", "Apellidos", "Direccion"];

console.log(miArreglo);

var misNotas = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(misNotas[0][2]);

//METODOS DE ARRAYS .push .pop .shift .unshift
miArreglo.push("Telefono"); //Añade al final
miArreglo.pop(); //Elimina el ultimo elemento
miArreglo.shift(); //Elimina el primer elemento
miArreglo.unshift("Hola"); //Añade al principio
console.log(miArreglo);

let texto="Hola";
texto.split('');//metodo de string que lo convierte a array

delete miArreglo["Nombre"]; //borra el elemento dejando el huevo a vacio
miArreglo.slice(1,2)//Borra todo lo que no este entre la posicion 1 y 2, sin incluir la 2
miArreglo.slice(1,-1)//de 4 elementos deja los dos del medio
miArreglo.slice(-2)//borra todo menos los 2 ultimos

miArreglo.slice(posicionInicial); //hasta el final
miArreglo.slice(posicionInicial,numeroElementos) //obtener nuevo array partido

miArreglo.concat([4,3]);//concatena al miArreglo el nuevo array pasado por argumentos

DE STRING A ARRAY
miString.split('');
DE ARRAY A STRING
miArray.join('')


//EJ 1
/*crear programa en javascript que permita mostrar por pantalla el nombre de los cientes
y su DNI.
Los clientes están almacenados en un aestructura array como la siguiente:

clientes = [["Pepe", "66666666A"], ["Juan", "11111111B"]]

Apariencia final => Cliente:    Pepe ------> 66666666A

*/

var clientes = [
    ["Pepe", "66666666A"],
    ["Juan", "11111111B"],
    ["Maria", "22222222C"]
];

for(var i = 0 ; i < clientes.length - 1 ; i++){
    let texto = "Cliente: \t " + clientes[i][0] + " ------> " + clientes[i][1];
    console.log(document.getElementById("main"))//a revisar
    /* .appendChild(texto); */
}

//EJ2
/*
    Dado el siguiente array miArray = [6,44,3,21,11,9,20];
    suma de los numeros pares
    suma de los numeros impares
    Crea un array con los numeros pares
    Crea un array con los numeros impares
    Muestra ambos arrays

    Añade a mi Array otro y cuenta cuantos numeros impares hay
*/
var pares = impares = 0;
var arrayPares = arrayImpares = [];
var miArray = [6,44,3,21,11,9,20];
for (var i = 0 ; i < miArray.length - 1 ; i++){
    if ( miArray[i] % 2 == 0 ){
        pares += miArray[i];
        arrayPares.push(miArray[i]);
    }else{
        impares += miArray[i];
        arrayImpares.push(miArray[i]);
    }
}

console.log("Pares: " + pares);
console.log("Impares: " + impares);
console.log("Array pares: " + arrayPares);
console.log("Array impares: " + arrayImpares);

var nuevoArray = [1,2,3,4,5,6,7,8,9];
console.log("Mi array: " + miArray);
miArray.push(nuevoArray);
console.log("Con nuevo array: " + miArray);

var contadorImpares = 0;
for(var i = 0 ; i < miArray.length - 1 ; i++){
    
    if( miArray[i] % 2 != 0 )
        contadorImpares++;

}
console.log("Contador de impares: " + contadorImpares);

///TODOS ESTOS METODOS LLEVAN UNA FUNCION CALLBACK O ARROW DENTRO DE ELLOS PARA EJECUTARSE
//// FOREACH Y MAP
Ambos iteran sobre un array, la diferencia es que forEach no devuelve NamedNodeMap, mientras que map 
devuelve una lista con el resultado de lo que hayas hecho dentro del array

//FIND Y FILTER
finde devuelve solo la primera ocurrencia, mientras que filter devuelve un array con todas las ocurrencias

//SLICE
devuelve una parte cortada del array original
array.slice(inicio, fin) //El fin no se incluye

//SPLIT
devuelve tantas cadenas como haya separadas por el separador indicado
array.split(",")