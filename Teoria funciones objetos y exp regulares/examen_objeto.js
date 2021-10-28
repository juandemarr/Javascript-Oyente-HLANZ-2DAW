//EXAMEN
//1 Acceder a un elemento del objeto
let usuario = {
    nombre : {
        first : "Pedro",
        last : "Salas"
    },
    edad : 30,
    esAdmin : true
}
console.log(usuario.nombre.last + ", " + usuario.nombre.first);
//Para cambiar datos
usuario.nombre.last = "Salas2";
//Para añadir datos
usuario.nombre.middleName = "Hello";



//2. Funcion sin nombre, anonima. Modificar edad
//Hay que asignarla a una variable para poder usarla
let nuevaEdad = function (edad){
    usuario.edad = edad;
}
nuevaEdad(45);

//3. Funcion que valide con una expresion regular un dni, lo añade si es correcto
function validarDNI(dni){
    let exp = new RegExp();
    exp = /[0-9]{8}[A-Z]/i;

    if(exp.test(dni))
        usuario.dni = dni;
}

//4. Serie geometrica. Crear funcion arrow pasandole por parametro r y n
//1+r+r^2+r^3...
let serie = (r,n) => {
    let suma = 0;
    for(let i = 0 ; i<=n ; i++){
        suma += Math.pow(r,i);
    }
    return suma;
}

//8. 
let valor = 0;
console.log(++valor); //suma antes y luego lo muestra. Devuelva 1
function sumarUno(){
    let valor = 1;
    valor += 1;
    console.log(valor); //muestra 2
}

sumarUno();

//9 Que devuelve si le añadimos al final console.log(valor);//devuelve 1

//10 Crear objeto que permita instanciar la info de edificios (calle, numero, poblacion, cp, plantas)
//crear instancia de objeto, sino es con clase tbn se puede con funcion
function edificios(calle,num,poblacion,cp){
    this.calle = calle;//indica que este valor se guarda en this, en esta funcion
    this.numero = num;
    this.poblacion = poblacion;
    this.cp = cp;
    this.pisos = [];//pisos = [{planta : ,letra : , propietario : }, {}]
    //crear un metodo que sea modificar
    this.modificarCalle = function (nuevaCalle){
        this.calle = nuevaCalle;
    }
    this.modificarNum = (nuevoNum) => this.numero = nuevoNum;
    this.modificarPoblacion = (nuevaPob) => this.poblacion = nuevaPob;
    this.modificarCP = (nuevaCP) => this.cp = nuevaCP;
    
    //agregarPropietario()
    this.agregarPropietario = function(nombre,numPlanta,nPuerta){
        //{planta : xxx, letra : ccc, propietario : sss}
        let piso = {
            planta : numPlanta, //planta, letra no son variables, sino claves
            letra : nPuerta, 
            propietario : nombre
        };
        let existe = false; //chivato
        for(let i = 0 ; i < this.pisos.length ; i++){
            if(this.pisos[i].planta === numPlanta && this.pisos[i].letra === nPuerta){//Hacerlo cuando no este el piso
                // guardado. Recorrer array de pisos para ver si la letra y el num esta repetido
                //y cambiar solo nombre
                this.pisos[i].propietario === nombre;
                existe = true;//con un else en este if no serviria, ya que con break saldria antes de llegar al else
                break;
            }   
        }
        if(!existe){
            this.pisos.push(piso);
        }
        
    }

}

//////////////////////////////////////////////////////////

//añadir en html y mostrar el resultado de edificios.pisos
window.onload = main;
function main(){
    document.getElementById("enviar").addEventListener("click",mostrarPisos,false);
    document.getElementById("buscadorPropietario").addEventListener("click",buscarPropietario,false);
}
function mostrarPisos(e){
    e.preventDefault();
    
    let calle = document.getElementById("calle").value;
    let numero = document.getElementById("numero").value;
    let poblacion = document.getElementById("poblacion").value;
    let cp = document.getElementById("cp").value;

    let nombrePropietario = document.getElementById("propietario").value;
    let letraPiso = document.getElementById("letra").value;
    let numeroPlanta = document.getElementById("nPlanta").value;

    let edificio = new edificios(calle,numero,poblacion,cp);
    //las funciones son objeto, por lo que se puede crear una e instanciarla luego como un objeto con new
    edificio.agregarPropietario(nombrePropietario,numeroPlanta,letraPiso);
    
    mostrarDatos(edificio);
}

function mostrarDatos(objetoPisos){
    document.getElementById("mostrarCalle").innerHTML += objetoPisos.calle + " ";
    document.getElementById("mostrarNumero").innerHTML += objetoPisos.numero + " ";
    document.getElementById("mostrarPoblacion").innerHTML += objetoPisos.poblacion + " ";
    document.getElementById("mostrarCP").innerHTML += objetoPisos.cp + " ";
    const numPiso = document.getElementById("numPiso");
    const letraPiso = document.getElementById("letraPiso");
    const propPiso = document.getElementById("propPiso");
    for(let i = 0 ; i < objetoPisos.pisos.length ; i++){
        numPiso.innerHTML += objetoPisos.pisos[i].planta + " ";
        letraPiso.innerHTML += objetoPisos.pisos[i].letra + " ";
        propPiso.innerHTML += objetoPisos.pisos[i].propietario + " ";
    }
}

///////////////////////////////////////////////////////////

//BUSCADOR DE PROPIETARIOS
//COMO OBTENER EL OBJETO PISOS DE OTRA FUNCION PARA USARLO EN ESTA? con return al llamarla 
//me lo estaria creando de nuevo y quedaria duplicado

//como podria ponerse esa variable en una exp regular para buscar coincidencias parciales?

function buscarPropietario(e){
    e.preventDefault();
    
    let exp = document.getElementById("buscador").value;
    let arrayResultados = [];

    for(let i = 0 ; i < objetoPisos.pisos.length ; i++){
        if(exp == objetoPisos.pisos[i].propietario){
            arrayResultados.push(objetoPisos.pisos[i].propietario);
        }
    }

    let escribirResultado = document.getElementById("resultadoPropietario");
    for(let i = 0 ; i < arrayResultados.length ; i++)
        escribirResultado.innerHTML += arrayResultados[i] + " ";

}

//////////////////////////////////////////////////////////

//TEORIA
let nombre_objeto = {
    nombre : 5,
    nombre2 : "valor",
}
//Para acceder al valor nombre:
nombre_objeto.nombre; //5
nombre_objeto["nombre"]; //5

//objeto dentro de un array, ocupa solo esa posicion
let miArray = ["hola",1,null,{edad:25,domicilio:"calle"}];
miArray[0]
miArray[3].edad; //25


var a = 10;
var a = "hola";
//se puede volver a crear con el mismo nombre y no da error, con let y const no se puede llamar igual en la declaracion

//let textoHTML = `<b>${xxx}</b>`;
//innerHTML +=

//MAP
//Multiplicar cada numero por 2
let aa = [1,2,3,4];
let bb = [1,2,3,4];
const resultado = aa.map(elemento=>{
    return elemento * 2;
})
console.log(resultado);

//FILTER. Devuelve otro array
const result = bb.filter(elemento => elemento>2);
console.log(result);