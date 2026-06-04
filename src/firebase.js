import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC26okdemQ7sE2w1CXaXpAQ1_yY76bxd8k",
  authDomain: "newproject-15a16.firebaseapp.com",
  projectId: "newproject-15a16",
  storageBucket: "newproject-15a16.firebasestorage.app",
  messagingSenderId: "408962711786",
  appId: "1:408962711786:web:d22914c0e6cff54aa95793",
  measurementId: "G-X8WGEVJT4C",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
