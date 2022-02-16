//en este fichero voy a generar todos los metodos crud
import {db} from "./firebase-config";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc, where} from "firebase/firestore";

//ahora vendrian los import de las tareas que quiero realizar en el crud


//me traigo la collection
//collection(nombre-instancia, nombre-collection) esta instancia es la bd que exporte en firebase-config
const librosCollection = collection(db,"libros");

class librosServicios{

    //añadir libro
    addLibros = (newLibro) =>{
        return addDoc(librosCollection, newLibro);
    }

    //borrar libro
    deleteLibro = (id)=>{
        const libro = doc(db,"libros",id);
        return deleteDoc(libro);
    }
    
    getLibro = (id)=>{
        const libro = doc(db,"libros",id);
        return getDoc(libro);
    }

    getLibroNombre = (nombreLibro) => {
        const q = query(librosCollection,where("titulo","==",nombreLibro)); //buscaria en todas las colecciones
        return getDoc(q);
    }

    updateLibros = (id, newLibro)=>{
        const libro = doc(db,"libros",id);
        return updateDoc(libro,newLibro);
    }

    getLibros = () => {
        return getDocs(query(librosCollection,orderBy("titulo","asc")));
    }
}

export default new librosServicios(); //new al ser una clas, para exportarla como objeto
