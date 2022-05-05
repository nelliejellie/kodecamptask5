import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from '../assets/images/aboutus.jpg'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div><img src={img1} className='w-full' /></div>
        <p>
          how to contact us
        </p>
    </div>
  )
}

export default About