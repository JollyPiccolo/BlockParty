/**
 * Adeline Roberts
 * CS-450
 * Firebase configuration
 * (Comments and structures based on the configuration templates provided by Expo and Google Firebase)
 */
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initial Firebase configuration info - connects BlockParty to it's specific Firebase Project
const firebaseConfig = {
  apiKey: "AIzaSyCztYxmWKw_fTf6B5bNFYRcU_xv6RQ5xAM",
  authDomain: "blockparty-d0e5b.firebaseapp.com",
  projectId: "blockparty-d0e5b",
  storageBucket: "blockparty-d0e5b.appspot.com",
  messagingSenderId: "554182338270",
  appId: "1:554182338270:web:6f8a86e75610290ebe044f"
};

//exports premade references to common Firebase structures with proper configuration
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
