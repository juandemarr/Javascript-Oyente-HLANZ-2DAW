import { array } from "prop-types";

//crear array que contenga solo los numeros positivos, y otro con los negativos
const numeros = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
const arrayPos = [];
const arrayNeg = [];
for(let i = 0 ; i<numeros.length ; i++){
    if(numeros[i]>=0)
        arrayPos.push(numeros[i])
    else
        arrayNeg.push(numeros[i]);
}
console.log(arrayPos);
console.log(arrayNeg);

//Otra forma
//var positivos = [];
let positivos = () => {
    for(valor of numeros)
        if(valor >= 0)
            positivos.push(valor);
}

//FILTER
console.log("FILTER");
//Otra forma con filter
//FILTER devuelve un array que contienen la restriccion aplicada en la funcion dentro de el
const negativos = numeros.filter((numero)=>{return numero < 0});
console.log(negativos);


//Mostrar por pantalla el nombre de los restaurantes que estan abiertos actualmente
//mostrar los restaurantes cuya puntuacion en 4 o mas
let restaurantes = [
    {nombre:"De mi rancho a tu cocina",puntaje:5,abierto:true},
    {nombre:"Hamburguesas Beto",puntaje:4,abierto:false},
    {nombre:"Tacoriendo",puntaje:3.5,abierto:true},
    {nombre:"Froyo",puntaje:5,abierto:true}
];
//abiertos actualmente
let abiertos = restaurantes.filter(function(restaurante){
    return restaurante.abierto;
});
console.log("FILTER en restaurantes");
console.log(abiertos);
console.log("nombre de los abiertos");
for(let restauranteAbierto of abiertos){
    console.log(restauranteAbierto.nombre);
}
//puntuaciones mayor o igual a 4
let puntuaciones = restaurantes.filter(r => r.puntaje>=4);
console.log(puntuaciones);

for(rest of puntuaciones)
    console.log(rest.nombre);


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