import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Titlescreen from './layouts/titlescreen';
import FAQ from './layouts/faq';


import './assets/css/default.css';
import './assets/css/body.css';
import './assets/css/basic.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Titlescreen/>
        <FAQ/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
