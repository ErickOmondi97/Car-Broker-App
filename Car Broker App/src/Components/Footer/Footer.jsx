import React from "react";
import '../../css/App.css';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/* single grid */}
          <div className="singleGrid">
            <span className="footerTitler">
              About
            </span>
            <ul className="footerUI grid">
              <li className="footerLi">
                How it works
              </li>
              <li className="footerLi">
                Careers
              </li>
              <li className="footerLi">
                Affiliates
              </li>
              <li className="footerLi">
                Media
              </li>
            </ul>
          </div>          
          
          {/* single grid */}
          <div className="singleGrid">
            <span className="footerTitler">
              Become Seller
            </span>
            <ul className="footerUI grid">
              <li className="footerLi">
                Add Vehicles
              </li>
              <li className="footerLi">
                Resource Center
              </li>
              <li className="footerLi">
                Bonds
              </li>
              <li className="footerLi">
                Release Dates
              </li>
            </ul>
          </div>
          
          {/* single grid */}
          <div className="singleGrid">
            <span className="footerTitler">
              Community
            </span>
            <ul className="footerUI grid">
              <li className="footerLi">
                Recommendations
              </li>
              <li className="footerLi">
                Gift Cards
              </li>
              <li className="footerLi">
                Top Ups
              </li>
              <li className="footerLi">
                Selling
              </li>
            </ul>
          </div>
          
          {/* single grid */}
          <div className="singleGrid">
            <span className="footerTitler">
              Booking Support
            </span>
            <ul className="footerUI grid">
              <li className="footerLi">
                 Updates for Covid-19
              </li>
              <li className="footerLi">
                Help Center
              </li>
              <li className="footerLi">
                Garage
              </li>
              <li className="footerLi">
              Trust & Safety
              </li>
            </ul>
          </div>
        </div>

        {/* footer lower section */}
        <div className="lowerSection grid">
          <p> &copy; 2023 All right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer