import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsNV_3vUeS6UQzVvDlk-n3PfJh5l3gX1U",
  authDomain: "christopher-wang-design.firebaseapp.com",
  projectId: "christopher-wang-design",
  storageBucket: "christopher-wang-design.firebasestorage.app",
  messagingSenderId: "846516669371",
  appId: "1:846516669371:web:a0c978dda4535dd507529e",
  measurementId: "G-VWBG14MNKJ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
