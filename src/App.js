import './App.css';
import {useState} from 'react'
import { HashRouter as Router, Routes,Route } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Details from './views/Details';
import "./db.json"


function App() {
  const staffs = require("./db.json")
  const allStaffs = staffs.staffs
  
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home allStaffs={allStaffs}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details allStaffs={allStaffs}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
