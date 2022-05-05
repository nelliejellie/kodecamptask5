import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import About from './views/About';
import Contact from './views/Contact';
import Details from './views/Details';
import "./db.json"

const staffs = require("./db.json")
const allStaffs = staffs.staffs

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App allStaffs={allStaffs}/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details/:id" element={<Details allStaffs={allStaffs}/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

