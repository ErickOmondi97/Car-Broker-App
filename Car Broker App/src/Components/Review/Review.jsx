import React from "react";
import '../../css/App.css';

//import icons
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';


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
              <img src="" alt="" />
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
              <img src="" alt="" />
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
              <img src="" alt="" />
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
              <img src="" alt="" />
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
              <img src="" alt="" />
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
              <img src="" alt="" />
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
