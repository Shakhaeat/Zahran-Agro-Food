import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBSE_KEY,
  authDomain: "tutorial-8b99b.firebaseapp.com",
  projectId: "tutorial-8b99b",
  storageBucket: "tutorial-8b99b.appspot.com",
  messagingSenderId: "984539240498",
  appId: "1:984539240498:web:7fb38f70b190df5de8042b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
