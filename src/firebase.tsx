// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAgJbpBdZPLeP5PPDG69OToQmim68LtlY",
  authDomain: "uni-finder-bba6d.firebaseapp.com",
  projectId: "uni-finder-bba6d",
  storageBucket: "uni-finder-bba6d.appspot.com",
  messagingSenderId: "615345855143",
  appId: "1:615345855143:web:06c8a15f0830b9f1429982",
  measurementId: "G-YKVK9SMPCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
