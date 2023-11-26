import { initializeApp } from "firebase/app";
import {  collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAS5tYPg5FbslzXPlHrBqb_YSkwpQo6zaA",
  authDomain: "react-notes-62078.firebaseapp.com",
  projectId: "react-notes-62078",
  storageBucket: "react-notes-62078.appspot.com",
  messagingSenderId: "462880051008",
  appId: "1:462880051008:web:f1c63980f50406d9b6b4a5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")