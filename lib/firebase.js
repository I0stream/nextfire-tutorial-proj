import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBd0joMF0hrB7_wOKBJFCR9YQO7KjTDHkw",
    authDomain: "nextfire-b63b5.firebaseapp.com",
    projectId: "nextfire-b63b5",
    storageBucket: "nextfire-b63b5.appspot.com",
    messagingSenderId: "821325584413",
    appId: "1:821325584413:web:5c100c5d24f2489dac0ef4",
    measurementId: "G-VW5LS3JRLM"
  };

  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export const firestore = firebase.firestore();
  export const storage = firebase.storage();