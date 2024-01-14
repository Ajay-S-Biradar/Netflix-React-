// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8E459aIjWBuXVVoWsiorjaZ62SA8cuw",
  authDomain: "netflix-08.firebaseapp.com",
  projectId: "netflix-08",
  storageBucket: "netflix-08.appspot.com",
  messagingSenderId: "1086484999773",
  appId: "1:1086484999773:web:fe47b7048155a68378a7b4",
  measurementId: "G-Y59JDZVRCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();