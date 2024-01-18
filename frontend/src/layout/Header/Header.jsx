import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneVolume } from "react-icons/fa6";
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
      <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
      <h4>COURSES</h4>
      </div>
      <ul>
         <li><Link to={""}>Home</Link></li>
         <li><Link to={"add"}>Add</Link></li>
         <li><Link to={"wishlist"}>Wishlist</Link></li>
         <li>Courses</li>
         <li>About</li>
         <li>Contact</li>
        </ul>
        <div className='phone'>
        <FaPhoneVolume className='icon' />
        <span>+43 4566 7788 2457</span>
        </div>
      </div>
  )
}

export default Header