// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0bqEtHRdADXrzlU0KFoHVWnfpWsi36hs",
  authDomain: "fir-project-e2342.firebaseapp.com",
  projectId: "fir-project-e2342",
  storageBucket: "fir-project-e2342.firebasestorage.app",
  messagingSenderId: "602103489462",
  appId: "1:602103489462:web:d8ae98c1c81293f1c8d717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);