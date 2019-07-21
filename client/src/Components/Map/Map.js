import React, { Component } from "react";
import HoodSidebar from "./HoodSidebar";
import TripSidebar from "./TripSidebar";
import CurrentSelectionCard from "./CurrentSelectionCard";

class Map extends Component {
  render() {
    return (
      <div id='Map'>
        <div className='map-container'>
          <h1 className='hood-main-title'>Gastown</h1>
          <div className='d-flex justify-content-between h-100 w-100'>
            <HoodSidebar />
            <CurrentSelectionCard />
            <TripSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
