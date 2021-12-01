/*
https://jsonplaceholder.typicode.com/users

traer json, meterlo en variable
*Crear una tabla dinamica que almacene por filas el nombre, apellido, email y geo de todos los usuarios.
*Crear una cookie que contenga el numero de usuarios que he insertado en la tabla y expire 3 dias mas al actual
*Crear utilizando webstorage una clave que contenga el codigo de colores asignado a la pag web y
    a la tabla(2 colores de fondo). Una local a sesion y otra sin expiracion

*/
/**
 * @description uso de JSON en javascript
 */

const jsonData = '[{"id":1,"name":"Leanne Graham","username":"Bret"},{"id":2,"name":"Luisa Graham","username":"Bretty"}]';
const objData = JSON.parse(jsonData);

let tabla = document.getElementById("tabla");


for(let obj of objData){
    let tr = document.createElement("tr");

    for(let clave in obj){//for of no se puede en objetos
        if(clave == "username" || clave == "id"){//para escoger algunos en concreto, comprobando la clave
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(obj[clave]));
            tr.appendChild(td);
        }
        
    }
    
    tabla.appendChild(tr);
    
}

//CREAR COOKIE
function crearCookie()
document.cookie = "nombre="

    