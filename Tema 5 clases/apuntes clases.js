//Javascript es multiparadigma, se puede programar de diferentes formas
//Basado en prototipos, todos los objetos van a depender o colgar de prototype

//Para crear clases, se puede con class o function constructora (con nombre en may)
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    //Metodos
    this.saludar = function(){ //la detecta como __proto__, cada vez que se declare un objeto, se crea la funcion y es ineficiente
        console.log(`Hola ${this.nombre}`);
    }
}

//Para crear instancias
const animal1 = new Animal("Hello there", "macho");
console.log(animal1);

//Mejora, sacar la funcion fuera dle objeto, permite usarla pero no la crea auto al crear cada objeto
Animal.prototype.saludar = function(){
    console.log(`Hola ${this.nombre}`);
}

animal1.saludar();


//Los prototipos tienen su propia herencia
//HERENCIA PROTOTIPICA
function Gato(nombre, genero, raza){
    this.super = Animal; //super se refiere a la clase padre de la que va a heredar
    this.super(nombre, genero);
    this.raza = raza
}

//la herencia se realiza con estas 2 lineas, para crear el linkado de padre e hijo
Gato.prototype = new Animal();
Gato.prototype.constructor = Gato;

//la sobreescritura del metodo ha de hacerse dsp de la creacion
//Se saca afuera de laclase

Gato.prototype.saludar = function(mensaje){
    console.log(`${mensaje} sobreescribindo el metodo saludar del padre: ${this.saludar}`);
}


//Apartir de ECMAScript6 (de 2015, el año es un numero anterior), se introduce la palabra class
//Las clases son estrictas
//use strict es para usar el mdo estricto, las avriables tienen que estar declaradas, etc

//(no usar var, sino let o const)
//const no permite cambiar el nombre o tipo de dato, pero si permite añadir mas datos, como al tratarse de un array
//es mas bien inmutable en cuanto al tipo de dato

class MiAnimal{ //no lleva parametros, sino en el cosntructor
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola ${this.nombre}`);
    }
}
//Herencia
class Perro extends MiAnimal{
    constructor(nombre,tipo,raza){
        super(nombre,genero);//super hace referencia al constructor padre
        this.raza = raza;
    }

    static comunicar(){//metodo estatico se puede ejecutar sin necesidad de instanciar la clase, se invoca llamando a la clase
        console.log("Hello there");
    }
}

Perro.comunicar();

//GETTER Y SETTER
//dentro de la clase
get getRaza(){
    return this.raza;
}

set setRaza(nuevaRaza){
    this.raza = nuevaRaza;
}

//Para usar el get y set no se pone parentesis, y el set tiene que ser una asignacion de igualdad
perro1.getRaza

perro1.setRaza = "Laabrador" //con = se asigna

//Todos los atributos no tienen que estar dentro del constructor