/*
Disponemos de una cadena de texto:
"Hello There General Kenobi"
Generar un numero aleatorio que parta el array en dos trozos
El array de la izquierda --> invertir
El array de la derecha --> trasladar las letras tres posiciones en el alfabeto
Seguidamente juntamos los dos arrays y mostramos.

*si es z te vas al principio,
el texto se pasa a minuscula
*/

let texto = "Hello There General Kenobi";

//Array.from(texto) equivalente a split
let newTexto = texto.split("") //parte el texto por nada, dejando cada uno de los elementos separados
let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

let numPartir = Math.floor(Math.random() * (newTexto.length - 1) + 1);
//floor al redondear hacia abajo no haria falta restarle 2 a la longitud

//PRIMERA MITAD
console.log("Numero partir: " + numPartir);
let primeraMitad = newTexto.splice(0,numPartir);//desde la posicion cero, ese numero de elementos
console.log("primera mitad: " + primeraMitad);

//SEGUNDA MITAD
let segundaMitad = newTexto.splice((primeraMitad.length-1).indexOf);//empieza en la posicion (indexOf) del ultimo valor de la primeraMitad
console.log("segunda mitad: " + segundaMitad);

//INVERTIR
var nuevaCadena=[];
for(let i = primeraMitad.length-1 ; i>=0 ; i--){
    /* for(let i = 0 ; i < primeraMitad.length-1 ; i++){
        aux=primeraMitad[i];
        primeraMitad[i]=primeraMitad[i+1];
        primeraMitad[i+1]=aux;
    } */
    nuevaCadena.push(primeraMitad[i]);
    
}
console.log("Invertir: " + nuevaCadena);

//MOVER TRES POSICIONES
var aux;
for(let i = 0 ; i < segundaMitad.length-1 ; i++){
    aux = segundaMitad[i+3];
}

