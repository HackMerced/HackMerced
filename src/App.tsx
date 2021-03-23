import React, { FC, Fragment } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createHashHistory } from "history";

import Home from "./pages/Home";
import PastHackathons from "./pages/PastHackathons";
import SponsorUs from "./pages/SponsorUs";
import ContactUs from "./pages/ContactUs";
import Application from "./pages/Application";
// import Login from "./pages/Login";
// import ResetPassword from "./pages/ResetPassword";
import Error from "./pages/404";
import DesignMerced from "./pages/DesignMerced";
import HackMercedVI from "./pages/HackMercedVI";
// import SignUp from "./pages/SignUp";
import Maintenance from "./pages/Maintenance";
import Dashboard from "./pages/Dashboard";

import "./App.scss";

const App: FC = (): JSX.Element => {
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
                <Route path="/past-hackathons" component={PastHackathons} />
                <Route
                    path="/archive"
                    render={({ match: { url } }): JSX.Element => (
                        <Fragment>
                            <Route exact path={`${url}/designmerced`}>
                                <DesignMerced />
                            </Route>
                            <Route exact path={`${url}/hackmercedvi`}>
                                <HackMercedVI />
                            </Route>
                            <Route exact path={`${url}/live`}>
                                <Dashboard />
                            </Route>
                            <Route path="/application" component={Application} />
                            {/* <Route
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
                            /> */}
                        </Fragment>
                    )}
                />
                <Route path="/maintenance" component={Maintenance} />
                <Route path="*" component={Error} />
                <Redirect from="/HackMerced" to="/" />
            </Switch>
        </Router>
    );
};

export default App;
