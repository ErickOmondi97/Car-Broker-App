import React from "react";
import '../../css/App.css';

//Imported Images


const Sellers = () => {
  return (
    <div className='sellers section'>
      <div className="secContainer container">
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
              <img src="" alt="" className="img"/>
            </div>
            <span className="info">
              <h4 className="name">
                Toyota
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
