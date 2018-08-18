import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('react-fontawesome');

class Footer extends Component {
  render() {
    return (


          <nav className="navbar is-primary is-bold">
            <div className = "navbar-end">
              <div className = "navbar-item">
                <Link id = "underline" to="/contactus">Contact Us</Link>
              </div>
              <div className = "navbar-item">
                <Link id = "underline" to="/aboutus">About Us</Link>
              </div>

              <div className = "navbar-item">
                <Link id = "underline" to="/faqs">FAQs</Link>
              </div>

              <div className = "navbar-item">
                <Link id = "underline" to="/Volunteer">Volunteers</Link>
              </div>
            </div>
          </nav>
    );
  }
}

export default Footer ;
