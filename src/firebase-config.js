// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiMCP0zbj4wjBCrozDx53VgQ-jE9PtmPE",
  authDomain: "adilet-46cd9.firebaseapp.com",
  projectId: "adilet-46cd9",
  storageBucket: "adilet-46cd9.appspot.com",
  messagingSenderId: "214387726824",
  appId: "1:214387726824:web:701f47b2701f4614076c5d",
  measurementId: "G-FD8K9281TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);