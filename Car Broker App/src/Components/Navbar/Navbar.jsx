import React, { useState } from "react";
import '../../css/App.css';

//Imported Images
import logo from '../../Assets/logo.png'

//Imported Icons
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {

  //statement to hold the navbar state
  const [navbar, setNavbar] = useState('navbar')

  //function to show navbar on smaller width screens
  const showNavbar = () => {
    setNavbar('navbar showNavbar')
  }

  //function to remove navbar on smaller width screens
  const removeNavbar = () => {
    setNavbar('navbar')
  }
  return (
    <div className='header'>
      <div className="logoDiv">
        <img src={logo} alt="Logo Image" className="logo"/>
      </div>

      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="" className="link">Used Cars</a>
          </li>
          
          <li onClick={removeNavbar} className="listItem">
            <a href="" className="link">New Cars</a>
          </li>
          
          <li onClick={removeNavbar} className="listItem">
            <a href="" className="link">Auctions</a>
          </li>
          
          <li onClick={removeNavbar} className="listItem">
            <a href="" className="link">Sell</a>
          </li>
        </ul>
          {/*Added an Icon that will close the navbar on small screens */}
          <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
          

      </div>

      <div className="signUp flex">
        <div className="text">Sign Up</div>
        {/*Added an Icon that will open the navbar on small screens */}
        <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>
      </div>
    </div>
  )
}

export default Navbar
