//NUMBER poco precisos
//Al aplicar metodos lo convierte a string
console.log((0.1 + 0.2).toFixed(100)); //muestra 100 digitos
//esta suma le añade numeros, error suyo
//8 bytes con estandar IEEE 774
// 5 / 0 es infinity
// 5 / -0 es -infinity
// 0 / 0 es NaN

//potencia = 2**3
//numero mas grande que puede representar sin redondeo=> 2**53 +1
//Number.MAX_SAFE_INTEGER  Valor seguro más grande
//Number.MIN_SAFE_INTEGER  Valor seguro más pequeño

var z = false;
!!z //lo deja como al principio
//js considera como falso:
//false, 0, -0, null (ausencia de valor), undefined (dato desconocido), NaN 

//LIBRERIA MATH
//es un objeto de tipo estatico, significa que
//para poder usarlo tenemos que llamarlo con su nombre

console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-7));
console.log(Math.ceil(4.3)); //redondeo hacia arriba
console.log(Math.floor(4.7)); //redondeo hacia abajo
console.log(Math.round(4.8)); //redondeo predeterminado
console.log(Math.pow(2,3)); //2 elevado a 3
console.log(Math.sign(-7)); //devuelve 1 si es positivo, -1 si es negativo
console.log(Math.sqrt(2)); //raiz cuadrada
console.log(Math.random()); //numero aleatorio entre 0 y 1. No es del todo aleatorio, al ser hecho por humano
console.log(Math.random() * (max - min) + min) //aleatorio entre dos valores

arrayNumeros.toFixed(3)//redondea a tres decimales