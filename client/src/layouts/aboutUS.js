import React, { Component } from 'react';
import "../assets/css/team.css";
import Header from "../components/header";
import Footer from "../components/footer";
import 'bulma/css/bulma.css'

class aboutUS extends Component {
    render() {
      return (
          <div className = "aboutUS">
            <Header/>
            
            
            <div class = "columns">
                <div class = "column is-2">
                    
                </div>
                <div class = "column is-8">
                    <h1 class = "title">About Us</h1>  
                    <hr/>               
                    <div class = "box">
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
                <div class = "column is-2">
    
                </div>
      
            </div>
    
      

            <Footer/>
        </div>
      );
    }
  }
  
  export default aboutUS;