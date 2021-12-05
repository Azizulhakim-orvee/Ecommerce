import { initializeApp } from "firebase/app";

import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCj0hZENUkzp8_E67SRo22-Ea7FzhMNJ70",
    authDomain: "ecommerce-3445b.firebaseapp.com",
    projectId: "ecommerce-3445b",
    storageBucket: "ecommerce-3445b.appspot.com",
    messagingSenderId: "343577864377",
    appId: "1:343577864377:web:49aaf64af3953c50c65368"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);