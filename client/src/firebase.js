// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1ad38.firebaseapp.com",
  projectId: "mern-estate-1ad38",
  storageBucket: "mern-estate-1ad38.appspot.com",
  messagingSenderId: "682995153958",
  appId: "1:682995153958:web:a01523e325ec1e10bcbae7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);