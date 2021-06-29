import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPEpRB7E2JlrmR6vbGcsvNt4vT9OuZEL0",
    authDomain: "clone-9bb95.firebaseapp.com",
    projectId: "clone-9bb95",
    storageBucket: "clone-9bb95.appspot.com",
    messagingSenderId: "551197232318",
    appId: "1:551197232318:web:3ab26940fae8f3913162ef",
    measurementId: "G-XZSVSCFSWE"
  });
  
  const db = firebase.firestore();

  export {db}