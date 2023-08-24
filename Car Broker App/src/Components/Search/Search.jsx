import React, {useEffect} from "react";
import '../../css/App.css';

//imported icons
import {AiOutlineSearch} from 'react-icons/ai'

//imported aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
  //initialized Aos and set the default animation duration
  useEffect (()=>{
    Aos.init (
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className='search'>
      <div className="secContainer container">
        <h3 data-aos='fade-up' className="title">
          Which vehicle are you looking for?
        </h3>

        <div className="searchDiv grid">
          <input data-aos='fade-up' type="text" placeholder='Type'/>
          <input data-aos='fade-up'type="text" placeholder='Year'/>
          <input data-aos='fade-up' type="text" placeholder='Model'/>
          <input data-aos='fade-up' type="text" placeholder='Price'/>
          <button className="btn primaryBtn flex">
            <AiOutlineSearch className='icon'/>
            <span>
              Search
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
