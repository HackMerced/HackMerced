import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Components/Design/Header';
import Footer from './Components/Design/Footer';
import Main from './main';
import ContactUs from './Components/Design/ContactUs';
import FAQ from './Components/Design/Faqs';
import Hacker from './Components/Design/SignUpHacker';
import Volunteer from './Components/Design/SignUpVolunteer';
import AboutUs from './Components/Design/AboutUs';

import './assets/css/main.css';
import "./assets/css/team.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path='/' component={Main}/>
          <Route path='/contactus' component={ContactUs}/>
          <Route path='/register' component={Hacker}/>
          <Route path='/faqs' component={FAQ}/>
          <Route path='/volunteer' component={Volunteer} />
          <Route path='/aboutus' component={AboutUs} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;