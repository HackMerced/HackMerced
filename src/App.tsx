import React, { FC } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from './app.history';
import Home from './pages/Home/home';
import Hackathons from './pages/Hackathons/hackathons';
import SponsorUs from './pages/SponsorUs/sponsors-us';
import ContactUs from './pages/Contact-Us/contact-us';
import Application from './pages/Application/application';
import Error from './components/404/404';
import DesignMerced from './pages/DesignMerced/designmerced';

import './App.scss';

const App: FC = (): JSX.Element => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sponsors" component={SponsorUs} />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route exact path="/past-hackathons" component={Hackathons} />
                <Route exact path="/application" component={Application} />
                <Route exact path="/designmerced" component={DesignMerced} />
                <Route path="*" component={Error} />
                <Redirect from="/HackMerced" to="/" />
            </Switch>
        </Router>
    );
};

export default App;
