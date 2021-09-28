//METODOS Y PROPIEDADES DE STRING
console.log('pepe'.length)//lo convierte a objeto y por eso se le puede poner el punto y su propiedad

//estos metodos no modifican el objeto original

let nombre = 'hola mundo';
console.log(nombre.indexOf("h")); //devuelve la posicion del valor o cadena de texto
// si lo encuentra, sino -1 

console.log(nombre.toUpperCase()); //devuelve la cadena en mayuscula

console.log(nombre.toLowerCase());

//console.log(nombre.replace(valorABurscar , valorDeReemplazo))
console.log(nombre.replace("j","P"));

//console.log(nombre.substring(inicio , [fin])) extrae desde el inicio hasta el fin. 
//Este es opcional, sino seria hasta el final de la cadena
console.log(nombre.substring(1));

console.log(nombre.slice(0 , -2));//igual que substring pero admite valores negativos
//desde el cero hasta dos antes del final
//equivale a
console.log(nombre.substring(0 , nombre.length-1));

console.log(nombre.trim())//elimina el espacio a izquierda y derecha del todo

console.log(nombre.startsWith("h",5))//valor,[posicion de inicio] Devuelve true o false

console.log(nombre.endsWith('o'));//valor,[longitud de la cadena, empezando a contar en 1]

//console.log(nombre.includes(valor,[inicio]))//si el valor esta incluido, devuelve true o false
console.log(nombre.includes("num",7));

console.log(nombre.repeat(4)); //se concatena 4 veces

//para decir el numero unicode de un caracter --> caracter.charCodeAt();

let texto="Hola";
texto.split('');//metodo de string que lo convierte a array

//TEMPLATES, comillas hacia la izq, para agregar variables con $
let nombre2 = "Antonio";
let edad = 34;
let ciudad = "Granada";

console.log(`Hola D. ${nombre2}, bienvenido a ${ciudad}`);