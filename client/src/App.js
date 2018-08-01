import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Main from './layouts/main';
import Contactus from './layouts/contactus';
import FAQ from './layouts/faq';
import Signup from './layouts/signUP';
import Volunteer from './layouts/signUPVolunteer';

import './assets/css/default.css';
import './assets/css/body.css';
import './assets/css/basic.css';

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
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;