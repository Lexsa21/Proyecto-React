import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwGPIshKNbRVSJe1frhQjj4G2KyWl4upA",
    authDomain: "lexsavinilos.firebaseapp.com",
    projectId: "lexsavinilos",
    storageBucket: "lexsavinilos.appspot.com",
    messagingSenderId: "139450134753",
    appId: "1:139450134753:web:b52bec6bcc7891178747a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
