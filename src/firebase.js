import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAwfS1VPCMq58JvP5bTrcjAwrPfmgeWzTM",
  authDomain: "babble-14376.firebaseapp.com",
  projectId: "babble-14376",
  storageBucket: "babble-14376.appspot.com",
  messagingSenderId: "992643499659",
  appId: "1:992643499659:web:354cd13c4c91cebf83f68e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();