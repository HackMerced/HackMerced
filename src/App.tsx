import React, { FC, Fragment, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createHashHistory } from "history";

import Home from "./pages/Home";
import Hackathons from "./pages/Hackathons";
import SponsorUs from "./pages/SponsorUs";
import ContactUs from "./pages/ContactUs";
import Application from "./pages/Application";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Error from "./components/404";
import DesignMerced from "./pages/DesignMerced";
import SignUp from "./pages/SignUp";
import Maintenance from "./pages/Maintenance";
import Dashboard from "./pages/Dashboard";
import { HackerState, TokenState } from "./App.types";
import "./App.scss";

const App: FC = (): JSX.Element => {
    const [hacker, setHacker] = useState<HackerState>();
    const [token, setToken] = useState<TokenState>();

    return (
        <Router
            history={createHashHistory({
                basename: "",
                hashType: "slash",
                getUserConfirmation: (message, callback) => callback(window.confirm(message)),
            })}
        >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sponsors" component={SponsorUs} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/past-hackathons" component={Hackathons} />
                <Route path="/application" component={Application} />
                <Route
                    path="/login"
                    render={({ match: { url } }): JSX.Element => (
                        <Fragment>
                            <Route exact path={`${url}/`}>
                                <Login updateHacker={setHacker} updateToken={setToken} />
                            </Route>
                            <Route path={`${url}/reset-password`} component={ResetPassword} />
                        </Fragment>
                    )}
                />
                <Route
                    path="/signup"
                    render={(): JSX.Element => <SignUp updateHacker={setHacker} updateToken={setToken} />}
                />
                <Route path="/designmerced" component={DesignMerced} />
                <Route path="/maintenance" component={Maintenance} />
                <Route
                    path="/dashboard"
                    render={(): JSX.Element => (
                        <Dashboard hacker={hacker} updateHacker={setHacker} token={token} updateToken={setToken} />
                    )}
                />
                <Route path="*" component={Error} />
                <Redirect from="/HackMerced" to="/" />
            </Switch>
        </Router>
    );
};

export default App;
