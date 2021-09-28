//Pasar un array como parametro a una funcion y debe:

//Funcion1 invertir array
/*var numeros = [];
for(let i = 0 ; i < 3 ; i++){
    numeros.push(prompt(`Dame número ${i+1}:`,0));//el segundo valor es predefinido
}   //si en dame numero pongo i++ sí modifia la i, solo se puede poner i+1 ya que solo cambia el texto, no la variable i

function f1(arr){
    return arr.reverse();
}

alert(f1(numeros));1;
*/


//Funcion2 convertir array a texto
var miArray = [1,2,3,4,5];
function f2(arr){
    //return arr.toString();//toString() metodo de array => convierte array a string
    //return arr.join('')//metodo de array => quita las comas juntandolo, o separado por lo que quieras entre las comas simples. Devuelve string
    return arr.toString().replaceAll(",","-");//replaceAll metodo de string
}
console.log(typeof miArray);
console.log(f2(miArray));
console.log(typeof f2(miArray));


//Funcion3 pasar texto a funcion y crear array. si es texto lo partira para unirlo al array
function f3(){
    let miArray = [];

    for(let p of arguments){
        if(typeof p == 'number')
            miArray.push(p);
         //se comprueba en consola que typeof(99) da 'number'. Comaprarlo con eso
        if(typeof p == 'string')
            miArray = miArray.concat(p.split(''));//p lo separa y concatena ese nuevo array al anterior
    }       //con concat lo muestra por pantalla pero no modifica el array original
    
    return miArray;
}
console.log(f3(2,"hola","adio",100));



// EJ1
// v1 Crear una funcion a la que le pasemos un texto, seguidamente creara un array que contenga los numeros unicode
// de cada una de las letras de ese texto

//v2 crear un objeto del tipo:
//{letra: codigo unicode} (no se admiten repeticiones)
//Ejemplo: {'H' : 128, 'o' : 99,...}

//v1
let unicode = (a) => {
    let arregloUnicode = [];
    for(let p of a)
        arregloUnicode.push(p.charCodeAt())
    return arregloUnicode;
}

console.log("Unicode");
console.log(unicode("Hello there"));

//EJ2 Dado un array de numeros, calcular una funcion que calcule las raices cubicas de cada numero, aplicando un redondeo
//a la tercera cifra decimal. Obligatorio el uso de map. Por ultimo ordenara de menor a mayor los resultados 
//de las raices cubicas

let raicesCubicas = (a) => {
    let arrayCubico = [];
    a.map ((a) => {
        arrayCubico.push(Math.pow(a,1/3).toFixed(3));
    });

    return arrayCubico;
};

let arrayNumeros = [2,3,4];
console.log("Funcion raices cubicas");
console.log(raicesCubicas(arrayNumeros));
