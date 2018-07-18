import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
      <nav className="menu2">
        <ul className="listfoot">
          <li>
            <Link to="/contactus">Contact Us</Link>

          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </nav>
      </footer>
    );
  }
}

export default Footer ;
