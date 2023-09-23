// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLgLCrJwhXlbDqSTQmobERcx-qL7q7oX8",
  authDomain: "netf-first.firebaseapp.com",
  projectId: "netf-first",
  storageBucket: "netf-first.appspot.com",
  messagingSenderId: "888598390978",
  appId: "1:888598390978:web:a9d28262e8bbab0329f35b",
  measurementId: "G-HDVNV2L1P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const firebaseAuth = getAuth(app)