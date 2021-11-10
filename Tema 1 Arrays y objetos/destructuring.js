/*Para extraer y declarar varias variables a la vez. Aplicable a arrays, objetos maps y sets
Asocia a la variable solo el contenido, de lo que se le pase a la derecha,
a no ser que se use spread orpeator, entonces crea un objeto con las claves y valores
*/
let variable = [2,4];
//let uno = variable[0];
//let dos  = variable[1];

//ahora seria
let [uno,dos] = variable;
console.log(uno);

//otro ej de destructuring
[a,b,...rest]=[10,20,30,40,50];//rest vale [30,40,50]   //spread o propagacion. 
//Con el resto no hae destructuring al coger todo lo que sobre

//otro ej. Para objetos hay que respetar el nombre de las claves
let {aa,bb} = {aa:10, bb:20};
console.log(aa);