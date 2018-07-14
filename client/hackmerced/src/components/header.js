import React, { Component } from 'react';

class Header extends Component {
  handleClick(){
    alert('this button has been clicked');
  }
  render() {
    return (
      <header>
          <nav className="menu">
            <ul className="list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
            </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
