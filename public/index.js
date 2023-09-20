// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCL3akMhnr38N8nHb0ZsFf5o0L7GgoDDI",
  authDomain: "mimi-s-tea.firebaseapp.com",
  projectId: "mimi-s-tea",
  storageBucket: "mimi-s-tea.appspot.com",
  messagingSenderId: "779472792159",
  appId: "1:779472792159:web:7a90c9146280334f0a09ea",
  measurementId: "G-0GS2KSYP6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);