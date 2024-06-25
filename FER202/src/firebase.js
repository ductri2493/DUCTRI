// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Df2rP497liGnZYS8h3mXwLKKEj7-gs8",
  authDomain: "fer202-lab.firebaseapp.com",
  projectId: "fer202-lab",
  storageBucket: "fer202-lab.appspot.com",
  messagingSenderId: "389208606061",
  appId: "1:389208606061:web:c84408522063780b260664",
  measurementId: "G-71PFFYD98X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
