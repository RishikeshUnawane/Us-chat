import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwXS3ugXpdh6pZjN_FSVfU2OI5v2N00LA",
  authDomain: "wassup-3bede.firebaseapp.com",
  projectId: "wassup-3bede",
  storageBucket: "wassup-3bede.appspot.com",
  messagingSenderId: "738417515080",
  appId: "1:738417515080:web:96cf540a4a1cf861ba167d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();