/*
https://jsonplaceholder.typicode.com/users

traer json, meterlo en variable
*Crear una cookie que contenga el numero de usuarios que he insertado en la tabla y expire 3 dias mas al actual
*Crear utilizando webstorage una clave que contenga el codigo de colores asignado a la pag web y
    a la tabla(2 colores de fondo). Una local a sesion y otra sin expiracion

*/
/**
 * @description uso de JSON en javascript
 */

const jsonData = '[{"id":1,"name":"Leanne Graham","username":"Bret"},{"id":2,"name":"Luisa Graham","username":"Bretty"}]';
const objData = JSON.parse(jsonData);


function crearTabla(){
    let tabla = document.getElementById("tabla");
    let cont = 0;
    
    for(let obj of objData){
        let tr = document.createElement("tr");
    
        for(let clave in obj){//for of no se puede en objetos
            if(clave == "username" || clave == "id"){//para escoger algunos en concreto, comprobando la clave
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(obj[clave]));
                tr.appendChild(td);
            }
            
        }
        cont++;
        tabla.appendChild(tr);
        
    }
    return cont;
}

//CREAR COOKIE
function crearCookie(num){
    const fecha = new Date();
    const fecha3 = new Date();
    fecha3.setDate(fecha.getDate()+3);

    document.cookie = "numeroUsuarios="+num+",expires="+fecha3;
}


crearCookie(crearTabla());
console.log(document.cookie);


//WEBSTORAGE

if(typeof(Storage)!="undefined"){
    let colorPag = getComputedStyle(document.querySelector("body")).backgroundColor;
    let colorTabla = getComputedStyle(document.getElementById("tabla")).backgroundColor;
    
    localStorage.setItem("colorFondo",colorPag);
    sessionStorage.setItem("colorTabla",colorTabla);
    //probar a guardar json y obtenerlo
}else{
    alert("El navegador no soporta webstorage")
}    