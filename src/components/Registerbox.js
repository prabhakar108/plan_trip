import React from 'react';
import { Link } from 'react-router-dom';

export default class registerbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li id="plan" >
            <Link to="">User name</Link>
          </li>
          <li id="ongoing" >
            <Link to="">Register</Link>
          </li>
          <li id="mytripa" >
            <Link to="">Contact us</Link>
          </li>

        </ul>
      </div>
    );
  }
}
