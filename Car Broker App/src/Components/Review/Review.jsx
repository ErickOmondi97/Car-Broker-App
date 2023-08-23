import React from "react";
import '../../css/App.css';

//import icons
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';

//import images
import rangeRover from '../../Assets/rangerover.png';
import landRoverDiscovery from '../../Assets/landrover-discovery.png';
import subaruAscent from '../../Assets/subaru-ascent.png';
import subaruForester from '../../Assets/subaru-forester.png';
import volkswagenAtlas from '../../Assets/volkswagen-atlas.png';
import toyotaVenza from '../../Assets/toyota-venza.png';

const Review = () => {
  return (
    <div className='review section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Recent Reviews</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon rightIcon' />
          </div>
        </div>

        {/* review container */}
        <div className="reviewContainer grid">
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={rangeRover} alt="Range Rover" />
            </div>

            <h5 className="reviewTitle">
              2023 Cadillac
            </h5>
            <span className="desc">
              Good cars are safe,fast, affordavle to purchase, economical to operate, reliable, capacious, comfortable and attractive.
            </span>
            
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="" alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Milani Asaria
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={landRoverDiscovery} alt="Land Rover Discovery" />
            </div>

            <h5 className="reviewTitle">
              2023 Cadillac
            </h5>
            <span className="desc">
              Good cars are safe,fast, affordavle to purchase, economical to operate, reliable, capacious, comfortable and attractive.
            </span>
            
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="" alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Milani Asaria
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={subaruAscent} alt="Subaru Ascent" />
            </div>

            <h5 className="reviewTitle">
              2023 Cadillac
            </h5>
            <span className="desc">
              Good cars are safe,fast, affordavle to purchase, economical to operate, reliable, capacious, comfortable and attractive.
            </span>
            
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="" alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Milani Asaria
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={subaruForester} alt="" />
            </div>

            <h5 className="reviewTitle">
              2023 Cadillac
            </h5>
            <span className="desc">
              Good cars are safe,fast, affordavle to purchase, economical to operate, reliable, capacious, comfortable and attractive.
            </span>
            
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="" alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Milani Asaria
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={volkswagenAtlas} alt="Volkswagen Atlas" />
            </div>

            <h5 className="reviewTitle">
              2023 Cadillac
            </h5>
            <span className="desc">
              Good cars are safe,fast, affordavle to purchase, economical to operate, reliable, capacious, comfortable and attractive.
            </span>
            
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="" alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Milani Asaria
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={toyotaVenza} alt="Toyota Venza" />
            </div>

            <h5 className="reviewTitle">
              2023 Cadillac
            </h5>
            <span className="desc">
              Good cars are safe,fast, affordavle to purchase, economical to operate, reliable, capacious, comfortable and attractive.
            </span>
            
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="" alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Milani Asaria
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Review
