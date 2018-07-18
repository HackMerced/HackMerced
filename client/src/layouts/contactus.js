import React, { Component } from 'react';
import facebook from '../assets/img/fb.png';
import mail from '../assets/img/mail.png'
class Contactus extends Component {
  render() {
    return (
      <contactus>
      <div className="contact_screen">
        <h1>Contact Us!</h1>
        <ul className="listcontact">
          <li>
            <a href="https://www.facebook.com/hackmerced"><img src={facebook} width="200" height="200"/></a>
          </li>
          <li>
            <a href="mailto:general@hackmerced.com%20?subject=Hackmerced%20Questions&body=Dear%20Hackmerced,"><img src={mail} width="200" height="200" /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/hackmerced">Facebook</a>
          </li>
          <li>
            <a href="mailto:general@hackmerced.com%20?subject=Hackmerced%20Questions&body=Dear%20Hackmerced,">Email</a>
          </li>
        </ul>
      </div>
      </contactus>
    );
  }
}

export default Contactus;
