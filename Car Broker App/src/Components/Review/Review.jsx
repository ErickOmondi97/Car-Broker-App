import React from "react";
import '../../css/App.css';

//import icons
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';

//import images
import rangeRover from '../../Assets/rangerover-interior.png';
import bmwX3 from '../../Assets/bmw-interior.png';
import jaguar from '../../Assets/jaguar-interior.png';
import subaruForester from '../../Assets/forester-interior.png';
import AudiQ7 from '../../Assets/AudiQ7-interior.png';
import toyotaHarrier from '../../Assets/harrier-interior.png';

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
              Range Rover
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
              <img src={bmwX3} alt="BMW X3" />
            </div>

            <h5 className="reviewTitle">
              BMW X3
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
              <img src={jaguar} alt="Jaguar" />
            </div>

            <h5 className="reviewTitle">
              Jaguar
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
              Subaru Forester
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
              <img src={AudiQ7} alt="Volkswagen Atlas" />
            </div>

            <h5 className="reviewTitle">
              Audi Q7
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
              <img src={toyotaHarrier} alt="Toyota Venza" />
            </div>

            <h5 className="reviewTitle">
              Toyota Harrier
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
