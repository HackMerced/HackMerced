/*import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Hello from '../components/Hello';

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 = "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Main extends Component {
  render() {
    return (
      <div style={styles}>
        <Hello name="HackMerced IV" />
        <Parallax bgImage={image1} strength={500}></Parallax>
        <h1>| | |</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Parallax bgImage={image3} blur={{min: -1,max:3}}></Parallax>
        <h1>| | |</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Parallax bgImage={image2} strength={-100}></Parallax>
        <div style={{height: 500}}>
          </div>
        <h2>{'\u2728'}</h2>
      </div>
    )
  }
}

export default Main;*/


import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import background1 from '../assets/img/background.jpg';
import background2 from '../assets/img/background2.jpg';
import background3 from '../assets/img/background3.jpg';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {background: 'rgba(0,0,0,0)', fontSize: '4rem', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const TitleScreen = () => (
  <div style={styles}>
    <Parallax bgImage={background1} strength={500}>
      <div style={{height: 500}}>
        <div style={insideStyles}>HackMerced |\/</div>
      </div>
    </Parallax>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
    <Parallax bgImage={background2} blur={{min: -1,max:3}}>
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
    )
  }
}

export default Home;