import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAViO-K_CZFC7nuZXOWNr1uTs0liujL3Vk",
  authDomain: "performancefirst-89136.firebaseapp.com",
  projectId: "performancefirst-89136",
  storageBucket: "performancefirst-89136.appspot.com",
  messagingSenderId: "142358851129",
  appId: "1:142358851129:web:842f634f178bae067de7e8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


