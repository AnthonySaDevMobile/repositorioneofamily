// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfw4P5CKuvJWBN_1sbikI8ywWDMGh4wXw",
  authDomain: "neofamily-7895c.firebaseapp.com",
  projectId: "neofamily-7895c",
  storageBucket: "neofamily-7895c.appspot.com",
  messagingSenderId: "865604101988",
  appId: "1:865604101988:web:0366402aa319ee90b27c71"
};


export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);
export const storage = getStorage(appFirebase)
export const storageRef = ref(storage);