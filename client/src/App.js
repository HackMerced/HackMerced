import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/Design/Header';
import Footer from './components/Design/Footer';
import Main from './main';
import ContactUs from './components/Design/ContactUs';
import FAQ from './components/Design/Faqs';
import Hacker from './components/Design/signUp';
import Volunteer from './components/Design/signUpVolunteer';
import AboutUs from './components/Design/AboutUs';

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