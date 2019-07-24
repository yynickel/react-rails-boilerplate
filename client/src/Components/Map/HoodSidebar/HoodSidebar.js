import React, {Component} from "react";
import HoodList from "./HoodList";


class HoodSidebar extends Component {
  render() {
    return (
      <div className='d-flex align-items-stretch hood-sidebar'>
        <ul className='list-group list-group-flush hood-list'>
          <li className='list-group-item hood-title-select'>Select Area</li>
          <HoodList updateSelection={this.props.updateSelection}/>
        </ul>
      </div>
    );
  }
}

export default HoodSidebar;
