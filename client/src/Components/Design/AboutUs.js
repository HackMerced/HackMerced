import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";

const FontAwesome = require('react-fontawesome');

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUS">
        <Header/>
        <i className="fas fa-home"></i>
        <div className="columns">
          <div className="column is-2">
          </div>
          <div className="column is-8">
            <h1 className="title">About Us</h1>
            <hr/>
            <div className="box">
              ANY CONTENT WIL GO HERE
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
          <div className="column is-2">
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutUs;
