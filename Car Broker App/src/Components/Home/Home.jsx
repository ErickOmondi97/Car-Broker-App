import React, {useEffect} from "react";
import '../../css/App.css';

//Imported Images
import homeImage from '../../Assets/Honda-Civic-Type-R.png';

//imported aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  //initialized Aos and set the default animation duration
  useEffect (()=>{
    Aos.init (
      {
        duration: 2000
      }
    )
  }, [])
  return (
    <div className='home'>
      <div data-aos='fade-up' className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Meet Your New Car</span>
          <h1 className="homeTitle">Honda Civic Type R</h1>
          <div className="btns flex">
            <button className="btn" data-aos='fade-right'>More Details</button>
            <button data-aos='fade-left' className="btn primaryBtn">TestDrive</button>
          </div>
        </div>

        <div data-aos='fade-down-right' className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>
  )
}

export default Home
