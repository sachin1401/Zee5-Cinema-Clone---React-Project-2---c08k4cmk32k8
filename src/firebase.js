// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEbQLQ8jjcQ7y7-0UEnHJlYyBwXAyIKrc",
  authDomain: "zee5-44345.firebaseapp.com",
  projectId: "zee5-44345",
  storageBucket: "zee5-44345.appspot.com",
  messagingSenderId: "847090798078",
  appId: "1:847090798078:web:78df71c88196acfe8ac4af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};