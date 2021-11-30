/*JSON
freeformatter, en json formatter se copia el texto y lo pone 
diferencias con los objetos de js
las claves aqui si levan comillas dobles

undefined no lo acepta como valor, ni funciones  ni DATE
Acpeta string, numero, array, objeto, boolean
Las comillas simples no estan permitidas
Los numeros no deben ir entre comillas dobles para no ser tratado como texto
tipo null sin comillas

JSON.stringify() de js a JSON
JSON.parse() convierte de json a js

json placeholder pag web que sirve para probar con datos que ofrecen, tipo lorem
el json tiene que estar en un reglon, para multiples reglones hay que usar la comilla ``
sin espacios en blanco

COOKIES
document.cookie = "nombre = Hello There;expires=Fri, 31 Dec 9999 23:59:59";

//para borrar una cookie, se le pone un tiempo a cero en UTC
document.cookie.split(";");//al ser de tipo string, lo convierte en array separado
document.cookie.split(";")[0]//seria la primera

AHORA SE USA WEB STORAGE. Se ven en la consola del navegador, aplicacion
*sessionStorage
*localStorage Permanecen, no fecha de expiracion

Primero comprobar si el navegador es compatible
if(typeof(Storage)!="undefined"){
    alert("El navegador soporta webstorage");
}else{
    alert("El navegador no soporta webstorage")
}

localStorage.setItem('miGato','Juan');
var miGato = localStorage.getItem('miGato');
localStorage.removeItem('miGato'); y clear

SETINTERVAL Y SETTIEMOUT
js tiene una cola de ejecucion, solo puede hacer 1 cosa a la vez.

*/
