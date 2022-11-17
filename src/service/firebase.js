// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ2F6dBN8XwXh_Xf43EBNbb4h3WJC9WbE",
  authDomain: "study-spots-44d73.firebaseapp.com",
  projectId: "study-spots-44d73",
  storageBucket: "study-spots-44d73.appspot.com",
  messagingSenderId: "213332298899",
  appId: "1:213332298899:web:b5fac27cca06728ec21166",
  measurementId: "G-GSQ7TQXMM0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
