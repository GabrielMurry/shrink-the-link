import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjk9bhIwGLCyOAjoT4D4UUTbPg7If8Mx4",
  authDomain: "shrink-the-link.firebaseapp.com",
  projectId: "shrink-the-link",
  storageBucket: "shrink-the-link.appspot.com",
  messagingSenderId: "1032451393966",
  appId: "1:1032451393966:web:73ac0874189793e53ee03f",
  measurementId: "G-V52TCBTGDX",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
