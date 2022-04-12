// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbMEdxlICBFdZjBE3ifWGuIp5nIPQFCZk",
    authDomain: "ema-john-simple-57ab4.firebaseapp.com",
    projectId: "ema-john-simple-57ab4",
    storageBucket: "ema-john-simple-57ab4.appspot.com",
    messagingSenderId: "440332258077",
    appId: "1:440332258077:web:b3edc2834ab1d2cab36ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
