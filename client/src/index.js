import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutUS from "./layouts/aboutUS"
import Team from "./layouts/team"
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(<App/>, document.getElementById('root'));


registerServiceWorker();