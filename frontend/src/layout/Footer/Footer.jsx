import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footerMain'>
    <div className='footer'>
      <div className='footerLogo'>

        <div className='logo'>
      <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
      <h4>COURSES</h4>
      </div>

      <p>In aliquam, augue a gravida rutrum,<br /> ante nisl fermentum nulla, vitae <br />
       tempor nisl ligula vel nunc. Proin quis <br /> mi malesuada, finibus tortor <br /> fermentum, tempor lacus.</p>
      
      </div>

      <ul className='menu'>
        <h4>Menu</h4>
         <li>Home</li>
         <li>Add</li>
         <li>Wishlist</li>
         <li>Courses</li>
         <li>About</li>
         <li>Contact</li></ul>

      <ul className='menu'>
        <h4>Usefull Links</h4>
        <li>Testimonials</li>
        <li>FAQ</li>
        <li>Community</li>
        <li>Campus Pictures</li>
        <li>Tuitions</li>
      </ul> 

      <ul className='menu'>
        <h4>Contact</h4>
        <li><img src="https://preview.colorlib.com/theme/course/images/placeholder.svg" alt="" />  Blvd Libertad, 34 m05200 Arévalo</li>
        <li><img src="https://preview.colorlib.com/theme/course/images/smartphone.svg" alt="" />  0034 37483 2445 322</li>
        <li><img src="https://preview.colorlib.com/theme/course/images/envelope.svg" alt="" /> hello@company.com</li>
      </ul>
    </div>

    <p className='colorib'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
    </div>
  )
}

export default Footer