import React from 'react';
import Sidebar from 'react-sidebar';

import { Link } from 'react-router-dom';

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="igniteSidebar-nav">
        <ul>
          <li>
            <Link id="l1" to="/plantripadminstration">Plan Trip</Link>
          </li>
          <li>
            <Link id="l1" to="/ongoingtripadminstration">Ongoing Trip</Link>
          </li>
          <li>
            <Link id="l1" to="/mytrupookadminstration">My TripBook</Link>
          </li>
          <li>
            <Link id="l1" to="/shareviewadminstration">Share/View</Link>
          </li>
        </ul>
      </div>
    );
  }
}
