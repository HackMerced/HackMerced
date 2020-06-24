import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './app.history';

import Home from './pages/Home/home';
import SponsorUs from './pages/SponsorUs/sponsors-us';

import './App.scss';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sponsors" component={SponsorUs} />
                <Redirect from="/HackMerced" to="/" />
            </Switch>
        </Router>
    );
};

export default App;
