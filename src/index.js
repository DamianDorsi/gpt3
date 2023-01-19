import React from 'react';
import { render } from "react-dom";
import { initializeApp } from "firebase/app";

import App from './App';
import './index.css';

const firebaseConfig = {
    apiKey: "AIzaSyC5aPpHlM9VAPerS76hdx_3-l7Ku29vxKE",
    authDomain: "gpt3-f2c05.firebaseapp.com",
    projectId: "gpt3-f2c05",
    storageBucket: "gpt3-f2c05.appspot.com",
    messagingSenderId: "558265279820",
    appId: "1:558265279820:web:080a31b27449c8eac7dbe9",
    measurementId: "G-4MGSS8T4PF"
  };

initializeApp(firebaseConfig);
const root = document.getElementById("root");
render(<App />, root);
