import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from './app.history';
import Home from './pages/Home/home';
import Hackathons from './pages/Hackathons/hackathons';
import SponsorUs from './pages/SponsorUs/sponsors-us';
import ContactUs from './pages/Contact-Us/contact-us';

import './App.scss';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sponsors" component={SponsorUs} />
                <Route exact path="/contact-us" component={ContactUs} />
                <Redirect from="/HackMerced" to="/" />
                <Route exact path="/past-hackathons" component={Hackathons} />
            </Switch>
        </Router>
    );
};

export default App;
