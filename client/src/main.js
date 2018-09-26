import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Dashboard from "./Components/Dashboard/Dashboard";

//IMPORT IMAGES
import background1 from './assets/img/ucmerced.png';

//IMPORT REACT-ROUTER-DOM LIBRARY
import { Link } from 'react-router-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const styles1 = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: "#09d1e8"
};

const insideStyles = {
  background: 'rgba(0,0,0,0)',
  fontSize: '4rem',
  padding: 20,
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const buttons = {
  top: '80%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%,-50%)'
};

const dashboard = {
  fontSize: '4rem',
  padding: 20,
  top: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%,-50%)'
};

const TitleScreen = () => (
  <div style={ styles }>
    <div style={ styles1 }>
    <Parallax bgImage={ background1 }>
      <div style={{ height: 600 }}>
        <div style={ insideStyles }>HackMerced |\/</div>
        <div className="dashboard" style={ dashboard }>
          <Dashboard />
        </div>
        <center>
          <div style={ buttons } className="buttons">
            <button className="button is-success is-large"><Link to="/register">APPLY</Link></button>
            <button className="button is-warning is-large">VOLUNTEER</button>
          </div>
        </center>
      </div>
    </Parallax>
    </div>
  </div>
);

class Home extends Component {
  render() {
    return (
      <TitleScreen />
    );
  }
}

export default Home;
