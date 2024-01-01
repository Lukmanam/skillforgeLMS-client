// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "skillforge-92467.firebaseapp.com",
  projectId: "skillforge-92467",
  storageBucket: "skillforge-92467.appspot.com",
  messagingSenderId: "184134137943",
  appId: "1:184134137943:web:b59b10714e0f2cbea74b12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);