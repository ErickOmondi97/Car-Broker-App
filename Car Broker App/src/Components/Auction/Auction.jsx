import React from 'react';
import '../../css/App.css';

//imported icons
import { BsArrowRightShort } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';

//imported images
import rangeRover from '../../Assets/rangerover.png';
import landRoverDiscovery from '../../Assets/landrover-discovery.png';
import subaruAscent from '../../Assets/subaru-ascent.png';
import subaruForester from '../../Assets/subaru-forester.png';
import volkswagenAtlas from '../../Assets/volkswagen-atlas.png';
import toyotaVenza from '../../Assets/toyota-venza.png';


const Auction = () => {

  return (
    <div className='auction section'>
      <div className="secHeading flex">
          <h3 className="secTitle">
            Active Auction
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon rightIcon"/>
          </div>
      </div>
      <div className="secContainer container">
        <div className="carContainer grid">
          {/* Single Car Div */}
          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={rangeRover} alt="Range Rover" />
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
              <img src={landRoverDiscovery} alt="Land Rover Discovery" />
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
              <img src={subaruAscent} alt="Subaru Ascent" />
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
              <img src={subaruForester} alt="Subaru Forester" />
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
              <img src={volkswagenAtlas} alt="Volkswagen Atlas" />
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
              <img src={toyotaVenza} alt="Toyota Venza" />
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