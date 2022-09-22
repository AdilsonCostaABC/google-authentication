// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZblaHEJ-EasWC3nM-8bIy98w4WN4ZkY",
  authDomain: "auth-yt-2c0a4.firebaseapp.com",
  projectId: "auth-yt-2c0a4",
  storageBucket: "auth-yt-2c0a4.appspot.com",
  messagingSenderId: "616961093950",
  appId: "1:616961093950:web:5550da70714f8c0bb4fc6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);