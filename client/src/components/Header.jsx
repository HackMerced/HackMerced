import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';
import background1 from '../assets/img/background.jpg';

var FontAwesome = require('react-fontawesome');


class Header extends Component {
  render() {
    return (
      <section className="hero is-primary is-bold">
        <div className = "hero-head">
          <nav className="navbar">
            <div className = "navbar-end">
              <div className = "navbar-item">
                <Link id = "underline"  to="/" className="Home">Home</Link>
              </div>

              <div className = "navbar-item">
                <Link id = "underline"  to="/register" className="Register">Register</Link>
              </div>


              <div className = "navbar-item">
                <Link id = "underline"  to="/timeline" className="Timeline">Timeline</Link>
              </div>
            </div>
          
        
          </nav>
        </div>
    </section>
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