//OBJETOS
let libro = {
    titulo : "libro1",
    autor : "autor1",
    edicion : "ed1",
    nPaginas : 678 
}

console.log("Un objeto " + libro.titulo);
console.log(libro['titulo']);//tbn se puede llamar con [], para aplicarle variables de iteraccion

let libros = {
    libro1 : {
        titulo : "libro1",
        autor : "autor1",
        edicion : "ed1",
        nPaginas : 678 
    },
    libro2 : {
        titulo : "libro1",
        autor : "autor1",
        edicion : "ed1",
        nPaginas : 678 
    }
};

console.log("Objeto de objetos: " + libros.libro1.titulo);

//unicode v2 del ejFunctions.js
let arrayTexto = ["h","o","l","a"];
let arrayUnicode = [54,89,34,21];
let datos = {}; //declaracion objeto vacio
for(let i = 0 ; i < arrayTexto.length ; i++){
    //Para añadir a mi objeto:
    //datos[item]=valor;
    datos[arrayTexto[i]] = arrayUnicode[i];
}

console.log(datos);