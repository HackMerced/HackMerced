import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutUS from "./layouts/aboutUS"
import Team from "./layouts/team"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));


registerServiceWorker();