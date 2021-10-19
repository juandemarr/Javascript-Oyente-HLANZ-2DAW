/*
Una expresion o conjunto de caracteres que simbolizan un patrón de búsqueda
Son un objeto. Entre / / a la derecha de la ult. barra se llaman banderas: g(global), i(case insentitive), 
m(multiline), s(single line), u(unicode), s (sticky, bit pegajoso)

regexr.com
nota: cualquier patron en su mayusucla es negarlo

Ej: //gim
Dentro de las barras:
^ =>empieza por, se pone delante del caracter
$ =>finaliza por, se pone detras del caracter
. =>cualquier caracter menos una linea nueva (linea new)
\d => cualquier digito (0-9)
\D => cualquier no digito
\w => cualquier caracter no especial (a-z A-Z 0-9 _) (tildes guion y ñ no)
\W => lo contrario a \w
\s => cualquier espacio en blanco (incluyendo tabulador)

Cuantificadores:
+ => uno o más
? => 0 o 1
* => 0 o más
{3} => exactamente 3 veces
{3,9} => rango de números desde mínimo a máximobundleRenderer.renderToStream
[ ] => busca los caracteres dentro de los corchetes (el primero o el segundo que aparezca)
[^ ] => niega lo anterior (ni la primera opcion ni la segunda)
[a-zA-ZÀ-ÿ] => cualquier caracter sin acentuar y acentuado
() => grupo
( | ) => uno u otro dentro del grupo

Para los caracteres que creen conflicto los escapamos con \

EXPRESIONES COMUNES:
Password 4-12 digitos: /^\d{4,12}$/     hacerle trim al recoger el valor
nombre_usuario: /^[a-zA-ZÀ-ÿ]{8,40}$/ 
_____________________________________________
Windows 2012/2018 => may, min, 1 dig al menos
tfno (958) 55 55 55
    958 55 55 55

Ejercicio: exp regular para emails: /[a-zA-Z0-9-\.\_]+@[a-zA-Z-\.]+\.[a-zA-Z]+/gim
Ejercicio: cualquier direccion IP: /(\d{1,3}\.){3}\d{1,3}/gim
Ejercicio: contraseña solo de 5 digitos: 

La validacion de los formularios se tiene que hacer en el servidor. El html y js se puede saltar la verificacion, aun
asi lo hacemos como prerrequisito(detectando primeros errores como vacios) pero no el unico
*/

let expresion = new RegExp();
expresion = /hola/gi;
let texto = "hola estamos probando con hello there";

//Sobre expresiones regulares tenemos .test(texto) devuelve true o false
//y .exec(texto) devuelve un objeto array
console.log(miExpresion.test(texto)); //devuelve true solo la primera vez, ya que tiene un puntero que se queda en esa posicion de la frase.
//Hay que resetear su indexOf

console.log(expresion.exec(texto));
//Sobre texto tenemos .match(exp regular) devuelve un objeto array
texto.match(expresion)