// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Import Firebase app initialization
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDywV5kz2rwMDIyuYiH2KwUSYfMpwKaJ7w",
    authDomain: "project-planner-b3c04.firebaseapp.com",
    projectId: "project-planner-b3c04",
    storageBucket: "project-planner-b3c04.appspot.com",
    messagingSenderId: "1071657284452",
    appId: "1:1071657284452:web:995ffd1ec60d7fe4a5c071",
    // measurementId: "G-9P8LLZ8TM2" // Uncomment if you're using Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the Firebase Authentication and Firestore instances
export { auth, db };
