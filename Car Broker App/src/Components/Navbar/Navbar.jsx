import React from "react";
import './css/Navbar.css';

//Import Images
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='header'>
      <div className="logoDiv">
        <img src={logo} alt="Logo Image" className="logo"/>
      </div>

      <div className="navbar">
        <ul className="menu">
          <li className="listItem">
            <a href="" className="link">Used Cars</a>
          </li>
          
          <li className="listItem">
            <a href="" className="link">New Cars</a>
          </li>
          
          <li className="listItem">
            <a href="" className="link">Auctions</a>
          </li>
          
          <li className="listItem">
            <a href="" className="link">Sell</a>
          </li>
        </ul>
          {/*Added an Icon that will close the navbar on small screens */}
      </div>
    </div>
  )
}

export default Navbar
