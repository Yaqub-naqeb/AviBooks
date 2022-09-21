import firebase from "firebase/app";

import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAJxX8rNDty5vVYcDEW50hRpew-U4aWAyE",
  authDomain: "book-e8586.firebaseapp.com",
  projectId: "book-e8586",
  storageBucket: "book-e8586.appspot.com",
  messagingSenderId: "881351900538",
  appId: "1:881351900538:web:97010d8c01159c9397eac3"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init serbices
const projectFirestore=firebase.firestore();
const projectAuth=firebase.auth();
export{projectFirestore,projectAuth}

