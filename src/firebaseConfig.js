import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgbDOmhNXb3ZhG1vv5yaku7AP88CTQZY4",
  authDomain: "cow-search-c38f8.firebaseapp.com",
  projectId: "cow-search-c38f8",
  storageBucket: "cow-search-c38f8.appspot.com",
  messagingSenderId: "551765059160",
  appId: "1:551765059160:web:93445203c4a7c251ce4c2d",
  measurementId: "G-KKLTNREVCB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
