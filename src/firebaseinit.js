// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhubNDvmoAHwSxFkqbuJMV8mYQXc9LzOs",
  authDomain: "nikhil-7afb4.firebaseapp.com",
  projectId: "nikhil-7afb4",
  storageBucket: "nikhil-7afb4.appspot.com",
  messagingSenderId: "945389919719",
  appId: "1:945389919719:web:70fb43a8d2245cdf6df142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)

