import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOZmc5smb_g_92s8p_4nyQcHyoj0zb5qw",
  authDomain: "project-218641915774.firebaseapp.com",
  projectId: "gpt-copy",
  storageBucket: "project-218641915774.appspot.com",
  messagingSenderId: "218641915774",
  appId: "1:218641915774:web:6d9eb09f16100037b41d2f",
  measurementId: "G-B5BSGEX2HJ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
