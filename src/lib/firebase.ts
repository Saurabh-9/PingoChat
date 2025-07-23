import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration - Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAbtCi_LE9XD36u2jUcEzwJehjE8S0zoCM",
  authDomain: "chatapp-3b156.firebaseapp.com",
  projectId: "chatapp-3b156",
  storageBucket: "chatapp-3b156.firebasestorage.app",
  messagingSenderId: "399169663801",
  appId: "1:399169663801:web:2825aae85f7f493beb6ee8",
  measurementId: "G-BQ34F44C3B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);