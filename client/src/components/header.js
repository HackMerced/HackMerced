import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

var FontAwesome = require('react-fontawesome');

class Header extends Component {
  render() {
    return (
      <header>
          <nav className="menu">
            <ul className="list">
              <li>
                <Link to="/home"> <FontAwesome  className = "fa-home"/>Home</Link>
              </li>
              <li>
                <Link to="/register"><FontAwesome  className = "fa-pencil"/>Register</Link>
              </li>
              <li>
                <Link to="/timeline"><FontAwesome  className = "fa-clock-o"/>Timeline</Link>
              </li>
            </ul>
          </nav>
          
      </header>
    
    );
  }
}

export default Header;
