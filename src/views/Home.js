import React from 'react'
import Navbar from '../Components/Navbar';
import Staffs from '../Components/Staffs';

const Home = ({allStaffs}) => {
  return (
    <div>
      <Navbar/>
      <h2 className='text-3xl font-bold text-center m-8 text-teal-500'>Staff Management App</h2>
      <Staffs staffs={allStaffs}/>
    </div>
  )
}

export default Home