import './App.css';
import Navbar from './Components/Navbar';
import Staffs from './Components/Staffs';
import {useState} from 'react'


function App({allStaffs}) {
  
  return (
    <div className="">
      <Navbar/>
      <h2 className='text-3xl font-bold text-center m-8 text-teal-500'>Staff Management App</h2>
      <Staffs staffs={allStaffs}/>
    </div>
  );
}

export default App;
