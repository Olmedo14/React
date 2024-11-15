import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD60-AF1jKlYrOyWpGxqm-Ge7EwB6qZTmo",
  authDomain: "react-ecommerce-5784e.firebaseapp.com",
  projectId: "react-ecommerce-5784e",
  storageBucket: "react-ecommerce-5784e.firebasestorage.app",
  messagingSenderId: "594772368514",
  appId: "1:594772368514:web:c5b20de9fa9e25703d289b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db