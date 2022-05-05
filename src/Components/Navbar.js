import React from 'react'
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between w-full bg-teal-500 h-16 items-center'>
            <Link to="/" className='mx-8 justify-self-start font-bold'>StaffMangement</Link>
            <div className='mx-4'>
                <Link to="/Contact" className='mx-2 text-white hover:bg-violet-600 hover:m-4'>Contact</Link>
                <Link to="/About" className='mx-2 text-white hover:bg-violet-600'>About</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar