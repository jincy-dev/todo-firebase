// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYfodDWb0FesSgdUXH4jcpzZXBPsv8d3E",
  authDomain: "todo-jincy.firebaseapp.com",
  projectId: "todo-jincy",
  storageBucket: "todo-jincy.firebasestorage.app",
  messagingSenderId: "39927112149",
  appId: "1:39927112149:web:01369456f9a7a63a389d5c",
  measurementId: "G-XQDZTM8KPS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);