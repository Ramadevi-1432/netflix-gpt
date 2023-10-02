// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNYZQYuK6772HCHnLgmum0-EtzEK73nK4",
  authDomain: "netflix-gpt-59272.firebaseapp.com",
  projectId: "netflix-gpt-59272",
  storageBucket: "netflix-gpt-59272.appspot.com",
  messagingSenderId: "37017062606",
  appId: "1:37017062606:web:0046738bbb755b7a05949f",
  measurementId: "G-V2NDG08RLK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
