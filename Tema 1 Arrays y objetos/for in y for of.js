/*5 maneras de iterar en js
1. Usando la propiedad Object.keys()
*/
let perro={
    nombre:"Scott",
    color:"Negro",
    macho:true,
    edad:5
}
let arr=["a","b","c","d"];

//En la antigüedad
let claves = Object.keys(perro);//array que muestra las claves del objeto.
let claves2 = Object.values(perro);
///////////////////////////////////////////
//Ahora
console.log("FOR IN PARA CLAVES");
//for in (saca las claves)
for (let clave3 in perro){
    console.log(clave3+":"+perro[clave3]);//saca el valor
    //no se puede usar perro.clave ya que buscaria literalmente la palabra clave en el objeto
    //para pasarle una variable tienen que ser con []
}
///////////////////////////////////
console.log("FOR OF PARA LOS ELEMENTOS DEL ARRAY; NO DEL OBJETO"); //No sirve para los objetos, al no ser iterables. Se tiene que hacer con for in 
//for of (saca los valores)
for (let valor of arr){
    console.log(valor);
}

/////////////////////////////////
//Antes
console.log("OBJECT ENTRIES CON FOR IN");

Object.entries(perro);//convierte cada entrada del objeto en array ['nombre','Scott'];
//Para recorrerlo con un foreach dentro
Object.entries(perro).forEach(([key,value])=>{
    console.log(value);
})
////////////////////////////////
console.log("OBJECT ENTRIES CON FOR OF");

for(const [key,value] of Object.entries(perro)){//key,value va entre llaves porque Object.entries devuelve un array. 
    //Si devolviera un objeto, se pondria entre {}. DESTRUCTURING
    //Para coger el 1 y el 3 seria [key,,value]
    console.log(value);
}

//////////////////////////
const perros=[
    {
        id:1,
        nombre:"Boby",
        edad:2,
    },
    {
        id:2,
        nombre:"Pepe",
        edad:4,
    }
];
//mostrar el nombre
for(let valor of perros){//valor sera cada objeto
    console.log(valor.nombre);
}
//crear funcion que muestre los nombres de los perros cuya edad es mayor de 3 años
/*const mayoresTres = perros.foreach(key,value){
    ;
}
*/

//REST. Array de argumentos indefinidos. Solo en funciones
function name(a,b,...args){

}

//SPREAD
console.log("SPREAD");
let a = [1,2,3];
let b = [4,5,6];

let c = [...a,...b];
console.log(c);

console.log(...a);//muestra solo los elementos de la variable, si estaba en un array ahora m¡los muestra sin array de forma individual


