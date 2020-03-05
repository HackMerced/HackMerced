import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

configure({ adapter: new EnzymeAdapter() });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
