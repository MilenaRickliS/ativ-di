// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCGq1xveM6eB4gWEpC9TJFvZW5UWSNo6w",
  authDomain: "projetodi-7c4f3.firebaseapp.com",
  projectId: "projetodi-7c4f3",
  storageBucket: "projetodi-7c4f3.appspot.com",
  messagingSenderId: "470220746422",
  appId: "1:470220746422:web:ff2ef489b9f1d30fb60017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };