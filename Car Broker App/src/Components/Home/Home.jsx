import React, {useEffect} from "react";
import '../../css/App.css';

//Imported Images
import homeImage from '../../Assets/Honda-Civic-Type-R.png';

const Home = () => {
  return (
    <div className='home'>
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Meet Your New Car</span>
          <h1 className="homeTitle">Honda Civic Type R</h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn">TestDrive</button>
          </div>
        </div>

        <div className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>
  )
}

export default Home
