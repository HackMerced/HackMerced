import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('react-fontawesome');
class Footer extends Component {
  render() {
    return (

<section className="hero is-primary is-bold">
        <div className = "hero-head">
          <nav className="navbar is-bold">
            <div className = "navbar-end">
              <div className = "navbar-item">
              <FontAwesome className="fa-mail-forward fas fa-2x"/><Link id = "underline" to="/contactus">Contact Us</Link>
              </div>

              <div className = "navbar-item">
              <FontAwesome className="fa-question fas fa-2x"/><Link id = "underline" to="/faqs">FAQs</Link>
              </div>

              <div className = "navbar-item">
              <FontAwesome className="fa-hand-stop-o fas fa-2x"/><Link id = "underline" to="/Volunteer">Volunteers</Link>
              </div>
            </div>
          </nav>
    </div>
  </section>
    );
  }
}

export default Footer ;
