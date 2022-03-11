// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk3vvt4R9-1-uFuAkB4d_qRXnwgRwpSTY",
  authDomain: "crud-react-ee881.firebaseapp.com",
  projectId: "crud-react-ee881",
  storageBucket: "crud-react-ee881.appspot.com",
  messagingSenderId: "261937450007",
  appId: "1:261937450007:web:2ec669778cf6e866a26052",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //<-- importo ya diréctamente.
