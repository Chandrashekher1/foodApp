// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ3Jptpb-RmeJtAotX67vmFY_guqarm5c",
  authDomain: "fork-and-feast-36907.firebaseapp.com",
  projectId: "fork-and-feast-36907",
  storageBucket: "fork-and-feast-36907.firebasestorage.app",
  messagingSenderId: "384706095080",
  appId: "1:384706095080:web:8d376f624ba2b09456e65d",
  measurementId: "G-J0EKBMBL49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
