import React, { FC, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import "./styles.scss";
import HACKMERCED_LOGO from "../../assets/images/hackmercedvi-logo.png";
import Live from "./live";
import Schedule from "./schedule";
import Prizes from "./prizes";

const Dashboard: FC = (): JSX.Element => {
    const { pathname } = useLocation();

    const BreakLine = (): JSX.Element => {
        return <div className="break-line"></div>;
    };

    const getDashboardContent = (): JSX.Element => {
        switch (pathname) {
            case "/live/schedule":
                return <Schedule />;
            case "/live/prizes":
                return <Prizes />;
            case "/live":
            default:
                return <Live time="15 March 2021 11:00:00" />; //Time is in Military
        }
    };

    return (
        <Fragment>
            <Navbar showBanner={false} />
            <main className="dashboard">
                <header className="dashboard__sub-navbar">
                    <nav className="dashboard__sub-navbar__nav">
                        <ul className="dashboard__sub-navbar__nav__ul">
                            <li className="dashboard__sub-navbar__nav__ul__li">
                                <Link to="/live" className="dashboard__sub-navbar__nav__ul__li__title">
                                    LIVE
                                </Link>
                                {pathname === "/live" ? BreakLine() : null}
                            </li>
                            <li className="dashboard__sub-navbar__nav__ul__li">
                                <Link to="/live/schedule" className="dashboard__sub-navbar__nav__ul__li__title">
                                    SCHEDULE
                                </Link>
                                {pathname === "/live/schedule" ? BreakLine() : null}
                            </li>
                            <li className="dashboard__sub-navbar__nav__ul__li">
                                <Link to="/live/prizes" className="dashboard__sub-navbar__nav__ul__li__title">
                                    PRIZES
                                </Link>
                                {pathname === "/live/prizes" ? BreakLine() : null}
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="dashboard__content">{getDashboardContent()}</section>
                <aside className="dashboard__aside">
                    <section className="dashboard__aside__event">
                        <img className="dashboard__aside__event__logo" src={HACKMERCED_LOGO} alt="Logo" />
                        <h1 className="dashboard__aside__event__title">HackMerced VI</h1>
                        <h2 className="dashboard__aside__event__start-title">Hacking Starts</h2>
                        <h3 className="dashboard__aside__event__start-time">March 12, 2021</h3>
                        <h2 className="dashboard__aside__event__end-title">Hacking Ends</h2>
                        <h3 className="dashboard__aside__event__end-time">March 14, 2021</h3>
                    </section>
                </aside>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Dashboard;
