import React, { Component } from 'react';
import "../assets/css/aboutUS.css";
import Header from "../components/header";
import Footer from "../components/footer";

class aboutUS extends Component {
    render() {
      return (
          <Header/>
          <div className = "aboutUS">
            <section class = "hero">
                <div class = "hero-head">
                        <nav class = "navbar">
                            <div class = "navbar-brand">
                                <a class = "navbar-item">
                                   
                                   
                                </a>
                            </div>
                            <div class = "navbar-end">
                                <a class = "navbar-item">
                                    <span>PROJECTS</span>
                                </a>
                                <a class = "navbar-item">
                                    <span>SIGN UP</span>    
                                </a>
                                
                                <a class = "navbar-item">
                                    <span>CONTACT US</span>
                                </a>
    
                                <a class = "navbar-item">
                                    <span class = "activo" >ABOUT US</span>
                                </a>
                            </div>
                        </nav>
                </div>
                
                    <div class = "hero-body">
                        <div class = "container">
                            <h1 class = "title">
                                About Us
                            </h1>
                        </div>
                    </div>
            </section>
    
            <div class = "columns">
                <div class = "column is-2">
                    
                </div>
                <div class = "column is-8">
                  
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
    
            
            <div class = "footer">
                hello world
            </div>
        </div>
        <Footer/>
      );
    }
  }
  
  export default aboutUS;