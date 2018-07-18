import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <nav className="menu">
            <ul className="list">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/timeline">Timeline</Link>
              </li>
            </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
