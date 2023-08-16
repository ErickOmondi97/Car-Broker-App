import React from "react";
import '../../css/App.css';

//imported icons
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';

//Imported Images


const Trending = () => {
  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Trending Near You
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon rightIcon"/>
          </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src="" alt="" />
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">
                Ksh.1.9M 
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
