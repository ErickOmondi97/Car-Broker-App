import React from 'react';
import '../../css/App.css';

//imported icons
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';

//imported images

const Auction = () => {
  return (
    <div className='auction section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Active Auction
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon rightIcon"/>
          </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Div */}
          <div className="singleCar grid singleCarActive">
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

            <div className="price_buyBtn flex">
              <span className="price">
                Ksh.1.9M 
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
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

            <div className="price_buyBtn flex">
              <span className="price">
                Ksh.1.9M 
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
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

            <div className="price_buyBtn flex">
              <span className="price">
                Ksh.1.9M 
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
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

            <div className="price_buyBtn flex">
              <span className="price">
                Ksh.1.9M 
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
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

            <div className="price_buyBtn flex">
              <span className="price">
                Ksh.1.9M 
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
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

            <div className="price_buyBtn flex">
              <span className="price">
                Ksh.1.9M 
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Auction