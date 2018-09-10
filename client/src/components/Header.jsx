import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Columns } from 'react-bulma-components';

var FontAwesome = require('react-fontawesome');
class Header extends Component {

  render() {
    return (
      <div className = "position">
      <section className="hero is-primary is-bold">
        <div className = "hero-head">
          <nav className="navbar">
            <div className = "navbar-end">
              <div className = "navbar-item">
                <FontAwesome className="fa-home fas fa-2x"/><Link id = "underline" style = {this.styles} to="/" className="Home">Home</Link>
              </div>

              <div className = "navbar-item">
                <FontAwesome className="fa-user fas fa-2x"/><Link id = "underline" style = {this.styles} to="/logIn" className="Home">Log In</Link>
              </div>

              <div className = "navbar-item">
                <FontAwesome className="fa-group fas fa-2x"/><Link id = "underline" to="/aboutus">About Us</Link>
              </div>

              <div className = "navbar-item">
                <FontAwesome className="fa-clock-o fas fa-2x"/> <Link id = "underline" style = {this.styles} to="/timeline" className="Timeline">Timeline</Link>
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
