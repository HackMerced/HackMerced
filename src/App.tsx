import React, { FC, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';

import Home from './pages/Home/home';
import Hackathons from './pages/Hackathons/hackathons';
import SponsorUs from './pages/SponsorUs/sponsors-us';
import ContactUs from './pages/Contact-Us/contact-us';
import Application from './pages/Application/application';
import Login from './pages/Login/login';
import LoginResetPassword from './pages/Login-ResetPassword/login-resetpassword';
import Error from './components/404/404';
import DesignMerced from './pages/DesignMerced/designmerced';
import SignUp from './pages/SignUp/SignUp';
import HackMercedVI from './pages/HackMercedVI/HackMercedVI';
import DashBoard from './pages/Dashboard/dashboard';
import DashboardPrizes from './pages/Dashboard-Prizes/dashboard-prizes';
import DashboardSchedule from './pages/Dashboard-Schedule/dashboard-schedule';
import { HackerState, TokenState } from './App.types';
import './App.scss';

const App: FC = (): JSX.Element => {
    const [hacker, setHacker] = useState<HackerState>();
    const [token, setToken] = useState<TokenState>();

    return (
        <Router
            history={createHashHistory({
                basename: '',
                hashType: 'slash',
                getUserConfirmation: (message, callback) => callback(window.confirm(message)),
            })}
        >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sponsors" component={SponsorUs} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/past-hackathons" component={Hackathons} />
                <Route path="/application" component={Application} />
                <Route path="/login" component={Login} />
                <Route path="/reset-password" component={LoginResetPassword} />
                <Route path="/signup">
                    <SignUp updateHacker={setHacker} updateToken={setToken} />
                </Route>
                <Route path="/designmerced" component={DesignMerced} />
                <Route path="/hackmercedvi" component={HackMercedVI} />
                <Route path="/dashboard">
                    <DashBoard hacker={hacker} updateHacker={setHacker} token={token} updateToken={setToken} />
                </Route>
                <Route path="/prizes" component={DashboardPrizes} />
                <Route exact path="/dashboard-schedule" component={DashboardSchedule} />
                <Route path="*" component={Error} />
                <Redirect from="/HackMerced" to="/" />
            </Switch>
        </Router>
    );
};

export default App;
