// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKZDKl6Ck9IKysuC7LKFugZseP0iTfcQc",
  authDomain: "challenge9-53323.firebaseapp.com",
  projectId: "challenge9-53323",
  storageBucket: "challenge9-53323.appspot.com",
  messagingSenderId: "209156721349",
  appId: "1:209156721349:web:50a76ae1c0c87a63efbeac",
  measurementId: "G-43CHL22358",
  databaseURL: "https://challenge9-53323-default-rtdb.firebaseio.com/",
};
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
// Initialize Firebase
export default initializeApp(firebaseConfig);
