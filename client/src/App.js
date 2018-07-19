import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import Header from './components/header';
import Footer from './components/footer';
import Titlescreen from './layouts/titlescreen';
<<<<<<< HEAD
import Contactus from './layouts/contactus';
=======
>>>>>>> 5f5db3521fd1b87e87b82435d0f52e4713005a9f
import FAQ from './layouts/faq';


import './assets/css/default.css';
import './assets/css/body.css';
import './assets/css/basic.css';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div className="App">
          <Header/>
          <Route exact path ='/' component={Titlescreen}/>
          <Route exact path ='/home' component={Titlescreen}/>
          <Route exact path ='/Contactus' component={Contactus}/>
          <Footer/>
          <Route exact path ='/faqs' component={FAQ}/>
        </div>
      </Router>
=======
      <div className="App">
        <Header/>
        <Titlescreen/>
        <FAQ/>
        <Footer/>
        
      </div>
>>>>>>> 5f5db3521fd1b87e87b82435d0f52e4713005a9f
    );
  }
}

export default App;
