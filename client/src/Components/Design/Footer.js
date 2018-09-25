import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('react-fontawesome');

class Footer extends Component {
  render() {
    return (
      <nav className="menu2">
        <ul className="listfoot">
          <li>
            <Link to="/contactus"><FontAwesome className="fa-mail-forward"/>Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutus"><FontAwesome className="fa-group"/>About Us</Link>
          </li>
          <li>
            <Link to="/faqs"><FontAwesome className="fa-question"/>FAQs</Link>
          </li>
          <li>
            <Link to="/volunteer"><FontAwesome className="fa-hand-stop-o"/>Volunteers</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Footer;
