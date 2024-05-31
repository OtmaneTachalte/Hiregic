import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
             
                <span className='text'>Hiregic</span>
                
            </div>
            <div className='links'>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            <span>Become a Seller</span>
            <button>Join</button>
            </div>
        </div>
        
    </div>

  )
}
