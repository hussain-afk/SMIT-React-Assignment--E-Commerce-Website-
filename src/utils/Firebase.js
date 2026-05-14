import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5xCZyGe48NtvQWTztk6P4RWBqvSL8Hno",
  authDomain: "bata-website-project.firebaseapp.com",
  projectId: "bata-website-project",
  storageBucket: "bata-website-project.firebasestorage.app",
  messagingSenderId: "681169287793",
  appId: "1:681169287793:web:b36dc618ea081cc1a9f9d0",
  measurementId: "G-FPJ1M1JYQZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Updated function to return the profile data
async function handleGoogleAuth() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    // We return this object so AuthPage.js can use it
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      profilePic: user.photoURL 
    };
  } catch (error) {
    console.error("Auth Error:", error.code, error.message);
    throw error; // This allows the UI to catch the error and show an alert
  }
}

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  handleGoogleAuth,
};