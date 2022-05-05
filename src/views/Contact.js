import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from '../assets/images/contactus.jpg'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div><img src={img1} className='w-full' /></div>
        <p>
          everything about us
        </p>
    </div>
  )
}

export default Contact