import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './main';
import ContactUs from './Components/ContactUs';
import Faqs from './Components/Faqs';
import Hacker from './Components/SignUpHacker';
import Volunteer from './Components/SignUpVolunteer';
import AboutUs from './Components/AboutUs';
import LogIn from './Components/LogIn';

import './assets/css/main.css';
import 'bulma/css/bulma.css';
import "./assets/css/team.css";
import "./assets/css/underlineLink.css";

import "font-awesome/css/font-awesome.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path ='/' component={Main}/>
          <Route path ='/Contactus' component={ContactUs}/>
          <Route path ='/register' component={Hacker}/>
          <Route path ='/faqs' component={Faqs}/>
          <Route path ='/Volunteer' component={Volunteer} />
          <Route path ='/aboutus' component={AboutUs} />
          <Route path = "/login" component = {LogIn}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
