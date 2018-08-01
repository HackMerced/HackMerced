import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './layouts/main';
import Contactus from './layouts/contactus';
import FAQ from './layouts/faq';
import Signup from './layouts/signUP';
import Volunteer from './layouts/signUPVolunteer';
import aboutUS from './layouts/aboutUS';

import './assets/css/main.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';
import "../assets/css/team.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path ='/' component={Main}/>
          <Route path ='/Contactus' component={Contactus}/>
          <Route path ='/register' component={Signup}/>
          <Route path ='/faqs' component={FAQ}/>
          <Route path ='/Volunteer' component={Volunteer} />
          <Route path ='/aboutus' component={aboutUS} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;