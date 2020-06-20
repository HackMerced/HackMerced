import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './app.history';

import Home from './pages/Home/home';
import Hackathons from './pages/Hackathons/hackathons';

import './App.scss';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect from="/HackMerced" to="/" />
                <Route exact path="/past-hackathons" component={Hackathons} />
            </Switch>
        </Router>
    );
};

export default App;
