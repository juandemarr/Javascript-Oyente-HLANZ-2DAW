import {getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeDqWo67pTe8xqTHveFheFzgOJzMMveww",
  authDomain: "crud-libros-a0ab9.firebaseapp.com",
  projectId: "crud-libros-a0ab9",
  storageBucket: "crud-libros-a0ab9.appspot.com",
  messagingSenderId: "209003426358",
  appId: "1:209003426358:web:e710878846fd75f2d2de97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); //esto sirve para no tener que importarlo en cada componente