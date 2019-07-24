import React, { Component } from "react";
import { IoMdStarOutline } from "react-icons/io";
import HotSpotIcon from "../../../global-assets/hotspot-score-icon-small.png";

class HoodPlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "loading data",
      count: 1
    };
  }

  componentDidMount() {}
  render() {
    return (
      <li
        className='list-group-item hood-place-list-item'
        onClick={() => {
          this.props.onClick(this.props.place.id);
        }}>
        <div className='col hood-place-name-div'>
          <p className='hood-place-name'>{this.props.place.name}</p>
          <p className='hood-place-type'>Pub / Restaurant</p>
        </div>
        <div className='col hood-place-hotspot-score-div'>
          <p className='hotspot-score-number-small'>
            {this.props.place.rating}{" "}
            <span className='icon'>
            <img className='hotspot-score-icon-small' src={HotSpotIcon} alt={""}/>
            </span>
          </p>
        </div>
      </li>
    );
  }
}

export default HoodPlaceList;
