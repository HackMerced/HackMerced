import React, { Component } from 'react';

import "../../assets/css/aboutUS.css";
import Header from "../components/Design/Header";
import Footer from "../components/Design/Footer";

class Team extends Component{
  render(){
      return(
        <div className="team">
          <Header/>
          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-8">
              <h1 className="title">Meet The Team</h1>
              <hr/>
              <div className="box">
                ANY CONTENT WILL GO HERE
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
          <div className="column is-2"></div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Team;
