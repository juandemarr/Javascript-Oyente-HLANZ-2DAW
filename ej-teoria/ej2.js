/*Crear un proyecto que realice:
crear un array de longitud aleatoria pero menor a 20
que cotenga numeros aleatorios comprendidos entre 0 y 10

Por ultimo mostrara el array
calculara la suma de los digitos de todos los elementos
mostrará el máximo de todos los elementos
mostrará el minimo de todos los elementos
me mostrará cuantos 0 hay almacenados en el array
*/

//CREACION DEL ARRAY
var longitudArray = Math.random() * 20;

while(longitudArray < 1)
    longitudArray = Math.random() * 20;

var longitudFinal = Math.round(longitudArray);
var newArray = [];

for(let i = 0 ; i < longitudFinal ; i++)
    newArray.push(Math.round(Math.random()*10));

console.log(newArray);

var sumaElementos = 0;
var max = 0;
var min = 10;
var numeroCeros = 0;

for(let i = 0 ; i < newArray.length ; i++){//si el for se repite hacerlo todo dentro
    
    //SUMA DE ELEMENTOS
    sumaElementos += newArray[i];
    
    //MAXIMO DE ELEMENTOS
    
    if(max < newArray[i])
        max = newArray[i];

    //MINIMO DE ELEMENTOS
    
    if(min > newArray[i])
        min = newArray[i];

    //NUMERO DE 0

    if(newArray[i] == 0) //mejor usar ===
        numeroCeros++;
}


console.log("Suma de elementos: " + sumaElementos);
console.log("El maximo del array es: " + max);
console.log("El minimo del array es: " + min);
console.log("Hay " + numeroCeros + " ceros");


