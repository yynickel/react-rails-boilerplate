import React, { Component } from "react";
import Carousel from "./IntroCarousel";
import HotSpotIcon from "../../global-assets/hotspot-score-icon-small.png";

class Intro extends Component {
  render() {
    return (
      <div id='Intro'>
        <div className='container-fluid intro-box-div'>
          <div className='row title-section'>
            <div className='col'>
              <div className='hotspot-logo-div'>
                <img
                  className='hotspot-logo-number'
                  src={HotSpotIcon}
                  alt={""}
                />
              </div>
              <h1 className='intro-title'>Vancouver's Hottest Spots</h1>
           
              <p className='intro-summary'>
                Discover restaurants, clubs and bars that are consistently busy
                 and highly rated in Vancouver's most popular areas
              </p>
              <div className='container-fluid intro-carousel-div'>
                <Carousel places={this.props.places} />
                <p className='intro-summary'>
                <h4 className='popular-now-title'>
                  <span className='badge badge-pill badge-info live-icon'>
                    LIVE
                  </span>{" "}
                  Popular Right Now
                </h4>
              </p>

              </div>
              <p className='intro-summary'>
                Explore popular neighbourhoods, find places and learn when to go.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
