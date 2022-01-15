class Estudiante{
     constructor(dni,nombre,edad){
        this._dni = dni;
        this._nombre = nombre;
        this._edad = edad;
    }
    get dni(){
        return this._dni;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    set dni(newDni){
        this._dni = newDni;
    }
    set nombre(newNombre){
        this._nombre = newNombre;
    }
    set edad(newEdad){
        this._edad = newEdad;
    }
}

class AlumnoHLANZ extends Estudiante{
    constructor(dni,nombre,edad,ciclo,curso){
        super(dni,nombre,edad);
        this._ciclo = ciclo
        this._curso = curso;
        this._modulos = [];
    }

    get ciclo(){
        return this._ciclo;
    }
    get curso(){
        return this._curso;
    }
    get modulos(){
        return this._modulos.join(", ");
    }
    set ciclo(newCiclo){
        this._ciclo = newCiclo
    }
    set curso(newCurso){
        this._curso = newCurso;
    }
    set modulos(mod){
        this._modulos.push(mod);
    }
}
//crear clase estudiante, con dni obligatorio, y la clase AlumnoHLANZ que extiende de Estudiante
//indicar ciclo formativo y curso al que pertenece. Crear los metodos modulos que muestren ls modulos
//de curso y permita tbn modificar los modulos que cursa. 
//Los modulos se lamacenaran en un array.

const alumno1 = new AlumnoHLANZ("11111111A","paco","21","DAW","2");

console.log(alumno1.dni + " - " + alumno1.nombre + " - " + alumno1.edad + " - " + alumno1.curso);
alumno1.modulos = "DWE";
alumno1.modulos = "despliegue";
console.log(alumno1.modulos);

//No se puede llamar al get igual que a la propiedad, se puede solucionar poniendo _delante de la propiedad
