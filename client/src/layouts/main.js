import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Header from "../components/Header";
import background1 from '../assets/img/background.jpg';
import background2 from '../assets/img/background2.jpg';
import background3 from '../assets/img/background3.jpg';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {
  background: 'rgba(0,0,0,0)', 
  fontSize: '4rem', 
  padding: 20, 
  position: 'absolute', 
  top: '50%', 
  left: '50%', 
  transform: 'translate(-50%,-50%)'
};

const buttons = {
  top: '60%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%,-50%)'
}

const TitleScreen = () => (
  <div style={styles}>
    <Parallax bgImage={background1} strength={500}>
      <div style={{height: 699}}>
        <div style={insideStyles}>HackMerced |\/</div>
        <center>
          <div style = {buttons} className = "buttons">
            <button className = "button is-success">HELLO</button>
            <button className = "button is-success">HELLO</button>
          </div>

        </center>
      </div>
    </Parallax>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
    <Parallax bgImage={background2} strength={500} blur={{min: -1,max:3}}>
      <div style={{height: 500}}>
        <div style={insideStyles}></div>
      </div>
    </Parallax>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
    <Parallax bgImage={background3} strength={-100}>
      <div style={{height: 500}}>
        <div style={insideStyles}></div>
      </div>
    </Parallax>
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