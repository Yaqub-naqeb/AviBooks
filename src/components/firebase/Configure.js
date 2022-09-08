import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth}from 'firebase/auth';
import useTheme from "../store/useTheme";

const firebaseConfig = {
  apiKey: "AIzaSyA0kgUF4Ax6-S2YGx4yyMCfJRA0BajWe6E",
  authDomain: "avibooks-21e66.firebaseapp.com",
  projectId: "avibooks-21e66",
  storageBucket: "avibooks-21e66.appspot.com",
  messagingSenderId: "942366335903",
  appId: "1:942366335903:web:03ee5ddc7e9e95881ad3aa"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// createUserWithEmailAndPassword(auth, em, pass)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
// alert('created')    // ...
//   })
  
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     // ..
//   });



