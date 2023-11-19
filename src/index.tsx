import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzXEiZd4tkBg1flXOZP-rUoVK3HwT-13U",
  authDomain: "alex-de3b8.firebaseapp.com",
  projectId: "alex-de3b8",
  storageBucket: "alex-de3b8.appspot.com",
  messagingSenderId: "575344642315",
  appId: "1:575344642315:web:589c48e1a35f354dbdfa0e",
  measurementId: "G-KP6PF6EX7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
