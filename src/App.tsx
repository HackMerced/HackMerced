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
import DashboardPrizes from "./pages/DashboardPrizes";
import DashboardSchedule from "./pages/DashboardSchedule";
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
        <Route exact path="/sponsors" component={SponsorUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/past-hackathons" component={Hackathons} />
        <Route exact path="/application" component={Application} />
        <Route
          exact path="/login"
          render={({ match: { url } }): JSX.Element => (
            <Fragment>
              <Route exact path={`${url}/`} >
                <Login updateHacker={setHacker} updateToken={setToken} />
              </Route>
              <Route exact path={`${url}/reset-password`} component={ResetPassword} />
            </Fragment>
          )}
        />
        <Route exact path="/signup">
          <SignUp updateHacker={setHacker} updateToken={setToken} />
        </Route>
        <Route exact path="/designmerced" component={DesignMerced} />
        <Route exact path="/maintenance" component={Maintenance} />
        <Route
          exact path="/dashboard"
          render={({ match: { url } }): JSX.Element => (
            <Fragment>
              <Route path={`${url}/`} exact>
                <Dashboard
                  hacker={hacker}
                  updateHacker={setHacker}
                  token={token}
                  updateToken={setToken}
                />
              </Route>
              <Route exact path={`${url}/prizes`} component={DashboardPrizes} />
              <Route exact path={`${url}/schedule`} component={DashboardSchedule} />
            </Fragment>
          )}
        />
        <Route path="*" component={Error} />
        <Redirect from="/HackMerced" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
