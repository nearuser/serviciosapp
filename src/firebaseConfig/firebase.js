
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes } from "@firebase/storage";

// datos del proyecto shootinpatagonia
const firebaseConfig = {
  apiKey: "AIzaSyBX0IoK7wxm0fK96nk5ZYN6QpYL7x0PtSE",
  authDomain: "shoot-in-patagonia.firebaseapp.com",
  projectId: "shoot-in-patagonia",
  storageBucket: "shoot-in-patagonia.appspot.com",
  messagingSenderId: "1063465965867",
  appId: "1:1063465965867:web:f4ff8faa2e9597b60f4d6e"
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