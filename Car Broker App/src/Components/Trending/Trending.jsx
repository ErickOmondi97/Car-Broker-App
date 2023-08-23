import React from "react";
import '../../css/App.css';

//imported icons
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';

//Imported Images
import subaruBrz from '../../Assets/subaru-brz.png';
import audiEtron from '../../Assets/audi etron.png';
import bmw2Series from '../../Assets/bmw-2series.png';
import mercedesBenzSL from '../../Assets/2023-mercedes-SL.png';

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
              <img src={subaruBrz} alt="Subaru Brz" />
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
          
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={audiEtron} alt="Audi Etron" />
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
          
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={bmw2Series} alt="BMW 2 Series" />
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
