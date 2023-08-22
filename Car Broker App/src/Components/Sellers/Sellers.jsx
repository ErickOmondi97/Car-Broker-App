import React from "react";
import '../../css/App.css';

//Imported Images
import toyota from '../../Assets/toyota-logo.png';
import hyundai from '../../Assets/hyundai-logo.png';
import mercedes from '../../Assets/mercedes-logo.png';
import volkswagen from '../../Assets/volkswagen.png';

const Sellers = () => {
  return (
    <div className='sellers section'>
      <div className="secContainer container grid">
        <div className="secHeading grid">
          <h3 className="secTitle">
            Explore top sellers in town
          </h3>

          <p>Joseph Samuel Girard holds the Guiness World Record for being the greatest salesman in the world</p>
        </div>

        <div className="sellersContainer">
          {/* Single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={toyota} alt="" className="Toyota Image"/>
            </div>
            <span className="info">
              <h4 className="name">
                Toyota
              </h4>
              <p>from 2M</p>
            </span>
          </div>
          
          {/* Single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={mercedes} alt="" className="img"/>
            </div>
            <span className="info">
              <h4 className="name">
                Mercedes Benz
              </h4>
              <p>from 2M</p>
            </span>
          </div>
          
          {/* Single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={volkswagen} alt="" className="img"/>
            </div>
            <span className="info">
              <h4 className="name">
                Volkswagen
              </h4>
              <p>from 2M</p>
            </span>
          </div>
          
          {/* Single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={hyundai} alt="" className="img"/>
            </div>
            <span className="info">
              <h4 className="name">
                Hyundai
              </h4>
              <p>from 2M</p>
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sellers
