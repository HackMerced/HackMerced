import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//IMPORT SEMANTIC UI
import {Menu} from "semantic-ui-react";

//IMPORT OF REACT COMPONENT FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faUsers, faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faUser, faUsers, faClock);



class Header extends Component {
  render() {
    return (
        <Menu fixed = "top" inverted> 
          <Menu.Menu position = "right"> 
            <Link id="underline" to="/">
              <Menu.Item name = "home">
                <FontAwesomeIcon icon="home" size="2x"/><span className = "navFont">Home</span>
              </Menu.Item>
            </Link>

            <Link id="underline" to="/logIn">
              <Menu.Item>
                <FontAwesomeIcon icon="user" size="2x"/><span className = "navFont">Log In</span>
              </Menu.Item>
            </Link>

            <Link id="underline" to="/aboutus">
              <Menu.Item>
                <FontAwesomeIcon icon="users" size="2x"/><span className = "navFont">About Us</span>
              </Menu.Item>
            </Link>

            <Link id="underline" to="/timeline" className="Timeline">
              <Menu.Item>
                <FontAwesomeIcon icon="clock" size="2x"/><span className = "navFont">Timeline</span>
              </Menu.Item>
            </Link>
            </Menu.Menu>
        </Menu>
    );
  }
}

export default Header;