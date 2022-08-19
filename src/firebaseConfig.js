// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQpjnkoDRsAPWYJDo85BukVq2zJ9KIac",
  authDomain: "ecommercereactsabatino.firebaseapp.com",
  projectId: "ecommercereactsabatino",
  storageBucket: "ecommercereactsabatino.appspot.com",
  messagingSenderId: "742796859797",
  appId: "1:742796859797:web:d45d6e1d68a5ebe33bbe9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db