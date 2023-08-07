
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes } from "@firebase/storage";

// datos del proyecto shootinpatagonia
const firebaseConfig = {
  apiKey: "AIzaSyDEoYq5IM60CDO3haQL1IfyP2UGduYbiLQ",
  authDomain: "bd-shootinpatagonia0.firebaseapp.com",
  projectId: "bd-shootinpatagonia0",
  storageBucket: "bd-shootinpatagonia0.appspot.com",
  messagingSenderId: "183145421615",
  appId: "1:183145421615:web:c075df797678e8f7979fda",
  measurementId: "G-K61N8YLPKH"
};

// inicializamos Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export function subirArchivo(file) {
  const storageRef = ref(storage, 'imagen_loc');
  uploadBytes(storageRef, file).then(snapshot => {
    console.log(snapshot);
  })
}