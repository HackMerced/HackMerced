import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//IMPORT OF REACT COMPONENT FONTAWESOME
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser, faUsers, faClock} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faUser, faUsers, faClock);


class Header extends Component {

  render() {
    return (
      <div className = "position">
      <section className="hero is-primary is-bold">
        <div className = "hero-head">
          <nav className="navbar">
            <div className = "navbar-end">
              <div className = "navbar-item">
                <FontAwesomeIcon icon = "home" size = "2x"/><Link id = "underline" style = {this.styles} to="/" className="Home">Home</Link>
              </div>

              <div className = "navbar-item">
                <FontAwesomeIcon icon = "user" size = "2x"/><Link id = "underline" style = {this.styles} to="/logIn" className="Home">Log In</Link>
              </div>

              <div className = "navbar-item">
                <FontAwesomeIcon icon = "users" size = "2x"/><Link id = "underline" to="/aboutus">About Us</Link>
              </div>

              <div className = "navbar-item">
                <FontAwesomeIcon icon = "clock" size = "2x"/> <Link id = "underline" style = {this.styles} to="/timeline" className="Timeline">Timeline</Link>
              </div>
            </div>
          
        
          </nav>
        </div>
    </section>
    </div>
    );
  }
}

export default Header;

/*<Columns className="navbar-container">
          <Columns.Column className="navbar-contents">
            <Link to="/" className="Home"><FontAwesome className="fa-home"/>Home</Link>
          </Columns.Column>
          <Columns.Column className="navbar-contents">
            <Link to="/register" className="Register"><FontAwesome className="fa-pencil"/>Register</Link>
          </Columns.Column>
          <Columns.Column className="navbar-contents">
            <Link to="/timeline" className="Timeline"><FontAwesome className="fa-clock-o"/>Timeline</Link>
          </Columns.Column>
        </Columns>*/
