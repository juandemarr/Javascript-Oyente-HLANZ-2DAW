/*Otras estructuras de datos
SET: coleccion de valores sin clave (como array) sin repeticiones
new Set(variable a aplicar)
set.add(valor) devuelve el array
set.delete(valor) devuelve true si lo elimina
set.has(valor) devuelve true si existe el valor
set.clear() elimina todo su contenido
set.size es la cantidad de elementos
*/
let set = new Set();
//set.add("hola");
let john = {name:"John"};

set.add(john);
set.add(john);

console.log(set.size); //devuelve 1

for(let user of set){
    console.log(user.name);
}

//EJ
//Dado uun array de numeros obtener un array sin repeticiones
const arr = [1,2,4,2,1,6,8,4,2];
console.log("array con repetidos. N de elemntos: "+arr.length);

const arrOnly = new Set(arr);
console.log("array sin repetidos pasando el original a Set. N de elementos: "+arrOnly.size);

arrOnly.add(2);//no lo añade, devuelve el array
arrOnly.delete(2);

/*
MAP: igual que los objetos, clave y valor
Ventaja: no hay repeticiones de claves.
Las claves pueden ser de cualquier tipo, como funciones
Mientras que en un objeto no siempre se respeta la posicion de las claves añadidas, en el map SI

new Map()
map.set(clave,valor) añadir
map.get(clave) coger un valor
map.has(clave)
map.delete(clave)
map.clear()
map.size

*/
let newMap = new Map();
newMap.set({a:1,b:4});

