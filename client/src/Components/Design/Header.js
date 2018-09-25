import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components'; // TODO: Replace Bluma with Semantic UI

var FontAwesome = require('react-fontawesome');

class Header extends Component {
  render() {
    return ( // Rewrite with Semantic UI
      <div className="navbar">
        <Columns className="navbar-container">
          <Columns.Column className="navbar-contents">
            <Link to="/" className="Home"><FontAwesome className="fa-home"/>Home</Link>
          </Columns.Column>
          <Columns.Column className="navbar-contents">
            <Link to="/register" className="Register"><FontAwesome className="fa-pencil"/>Register</Link>
          </Columns.Column>
          <Columns.Column className="navbar-contents">
            <Link to="/timeline" className="Timeline"><FontAwesome className="fa-clock-o"/>Timeline</Link>
          </Columns.Column>
        </Columns>
      </div>
    );
  }
}

export default Header;
