// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbxs8GgKlrjE7LEasEroFKboEXj917lp4",
  authDomain: "best-tools-parts.firebaseapp.com",
  projectId: "best-tools-parts",
  storageBucket: "best-tools-parts.appspot.com",
  messagingSenderId: "387378952960",
  appId: "1:387378952960:web:a3a61b43283ec132eb11e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
