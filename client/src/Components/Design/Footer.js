import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//IMPORT OF REACT COMPONENT FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faQuestion, faStop } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faQuestion, faStop);

class Footer extends Component {
  render() {
    return (
      <section className="hero is-primary is-bold">
        <div className="hero-head">
          <nav className="navbar is-bold">
            <div className="navbar-end">
              <div className="navbar-item">
                <FontAwesomeIcon icon="envelope" size="2x"/><Link id="underline" to="/contactus">Contact Us</Link>
              </div>
              <div className="navbar-item">
                <FontAwesomeIcon icon="question" size="2x"/><Link id="underline" to="/faqs">FAQs</Link>
              </div>
              <div className="navbar-item">
                <FontAwesomeIcon icon="stop" size="2x"/><Link id="underline" to="/Volunteer">Volunteers</Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Footer;