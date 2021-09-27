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
console.log(f3(2,"hola","adios",100));



//CONVERSION DE TIPOS
/*
parseInt(9.99) //te quedas con la parte entera
parseFloat("9.99")//Devuelve el numero 9.99
Number("")//Devuelve el numero 0
String(9)//Devuelve la cadena de texto 9
*/