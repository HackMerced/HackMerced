import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <Columns className="navbar-container">
          <Columns.Column className="navbar-contents">
            <Link to="/" className="Home">Home</Link>
          </Columns.Column>
          <Columns.Column className="navbar-contents">
            <Link to="/register" className="Register">Register</Link>
          </Columns.Column>
          <Columns.Column className="navbar-contents">
            <Link to="/timeline" className="Timeline">Timeline</Link>
          </Columns.Column>
        </Columns>
      </div>
    );
  }
}

export default Header;
