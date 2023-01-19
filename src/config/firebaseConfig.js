// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSGwEV5wuIvnJasHaHkpOpIrnbV46ZsA0",
  authDomain: "cohort-15-blog-e6538.firebaseapp.com",
  projectId: "cohort-15-blog-e6538",
  storageBucket: "cohort-15-blog-e6538.appspot.com",
  messagingSenderId: "84803098070",
  appId: "1:84803098070:web:8fab99f1a177702791c077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)