// en este fichero voy a generar todos los métodos CRUD
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
// ahora vendrían los import de las libros que quiero realizar en el crud.

// me traigo la collection
// collection(nombre-Instancia, nombre-collection)
const librosCollection = collection(db, "libros");

class librosServicios {
  // añadir libro.
  addLibros = (newLibro) => {
    return addDoc(librosCollection, newLibro);
  };

  // borrar libro

  deleteLibro = (id) => {
    const libro = doc(db, "libros", id);
    return deleteDoc(libro);
  };

  getLibro = (id) => {
    const libro = doc(db, "libros", id);
    return getDoc(libro);
  };

  getLibroNombre = (nombreLibro) => {
    // ¿funciona???
    const q = query(librosCollection, where("titulo", "==", nombreLibro));
    console.log("Q=", q);
    console.log("GetDocs:", getDocs(q));
    return getDocs(q);
  };

  updateLibro = (id, newLibro) => {
    const libro = doc(db, "libros", id);
    return updateDoc(libro, newLibro);
  };

  getLibros = () => {
    const q = query(librosCollection, orderBy("titulo", "asc"));
    return getDocs(q);
  };
}

export default new librosServicios();
