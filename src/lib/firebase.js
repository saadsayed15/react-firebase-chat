import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f7271.firebaseapp.com",
  projectId: "reactchat-f7271",
  storageBucket: "reactchat-f7271.firebasestorage.app",
  messagingSenderId: "522969404285",
  appId: "1:522969404285:web:6bf9db8b5bf1ea6d793214",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
