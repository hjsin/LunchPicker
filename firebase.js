// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgmcLHYgdjQ444BZgDnVGSUwqzZDsAJkw",
  authDomain: "lunch-picker-6a10c.firebaseapp.com",
  projectId: "lunch-picker-6a10c",
  storageBucket: "lunch-picker-6a10c.firebasestorage.app",
  messagingSenderId: "945217198408",
  appId: "1:945217198408:web:d5de26048f3c5d9a4f3b7d",
  measurementId: "G-H1T9SDMJHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Prevent error by checking if `window` is available before initializing Analytics
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, analytics };