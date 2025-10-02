// Import needed SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase project config (replace with your values from Firebase Console)
const firebaseConfig = {
  apiKey: process.env.AIzaSyDF-bvILdtpQVrNt_5BduZsALAzK-whEyI,
  authDomain: process.env.boss-messenger-plus.firebaseapp.com,
  projectId: process.env.boss-messenger-plus,
  storageBucket: process.env.boss-messenger-plus.firebasestorage.app,
  messagingSenderId: process.env.533707425615,
  appId: process.env.1:533707425615:web:54508cd52320095cb7a73a,
  measurmentID: process.env.G-GCLZ8L6LK5
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
