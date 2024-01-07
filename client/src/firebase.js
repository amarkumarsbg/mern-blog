// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5def1.firebaseapp.com",
  projectId: "mern-blog-5def1",
  storageBucket: "mern-blog-5def1.appspot.com",
  messagingSenderId: "698426756726",
  appId: "1:698426756726:web:58560771af688964e75957",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
