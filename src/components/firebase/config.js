import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// new
const firebaseConfig = {
  apiKey: "AIzaSyBUeLdbEQlF7omj3F-_9w5VCywmOjk-SFE",
  authDomain: "newbook-3d9d0.firebaseapp.com",
  projectId: "newbook-3d9d0",
  storageBucket: "newbook-3d9d0.appspot.com",
  messagingSenderId: "277918705788",
  appId: "1:277918705788:web:20290797fb5923897ec1f9"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init serbices
const projectFirestore=firebase.firestore();
const auth=firebase.auth();

//timestamp
  const timestamp=firebase.firestore.Timestamp

export {projectFirestore,auth,timestamp}

