import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1-qknH0kk4w7I7QdFyRqZxaBvfhW1mus",
    authDomain: "letmeask-c2f65.firebaseapp.com",
    databaseURL: "https://letmeask-c2f65-default-rtdb.firebaseio.com",
    projectId: "letmeask-c2f65",
    storageBucket: "letmeask-c2f65.appspot.com",
    messagingSenderId: "398427206972",
    appId: "1:398427206972:web:87421f004447f96c749a39"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();