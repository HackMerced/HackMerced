import React, { FC, Fragment, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import HackMercedVII from "./pages/HackMercedVII";
import PastHackathons from "./pages/PastHackathons";
import SponsorUs from "./pages/SponsorUs";
import ContactUs from "./pages/ContactUs";
import Application from "./pages/Archive/Application";
import Error from "./pages/404";
import DesignMerced from "./pages/Archive/DesignMerced";
import HackMercedVI from "./pages/Archive/HackMercedVI";
import Hacktually2 from "./pages/Archive/LearnDay";
import Maintenance from "./pages/Maintenance";
import Dashboard from "./pages/Dashboard";
import { animate } from "./utils/mousetrail";

import "./App.scss";

const App: FC = (): JSX.Element => {
    useEffect(() => {
        animate();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/hackmercedvii">
                    <HackMercedVII />
                </Route>
                <Route path="/sponsors">
                    <SponsorUs />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route path="/past-hackathons">
                    <PastHackathons />
                </Route>
                <Route
                    path="/archive"
                    children={({ match: { url } }): JSX.Element => (
                        <Fragment>
                            <Route path={`${url}/designmerced`}>
                                <DesignMerced />
                            </Route>
                            <Route path={`${url}/hackmercedvi`}>
                                <HackMercedVI />
                            </Route>
                            <Route path={`${url}/live*`}>
                                <Dashboard />
                            </Route>
                            <Route path={`${url}/application`}>
                                <Application />
                            </Route>
                            <Route path={`${url}/hacktually2`}>
                                <Hacktually2 />
                            </Route>
                        </Fragment>
                    )}
                />
                <Route path="/maintenance">
                    <Maintenance />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
