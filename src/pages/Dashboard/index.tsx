import React, { FC, Fragment, useState, useEffect, useRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import "./styles.scss";
import { HackerState, TokenState } from "../../App.types";
import HACKMERCED_LOGO from "../../assets/images/hackmerced-logo.png";
import Live from "./live";
import Schedule from "./schedule";
import Prizes from "./prizes";

const authenticateHacker = (hacker: HackerState) => {
    if (hacker.id === "" || hacker.email === "" || hacker.firstName === "" || hacker.lastName === "") {
        return false;
    }

    return true;
};

const authenticateToken = (token: TokenState) => {
    if (token.accessToken === "" || token.refreshToken === "" || token.tokenType !== "Bearer") {
        return false;
    }

    return true;
};

const Dashboard: FC<{
    hacker: HackerState | undefined;
    updateHacker: React.Dispatch<React.SetStateAction<HackerState | undefined>>;
    token: TokenState | undefined;
    updateToken: React.Dispatch<React.SetStateAction<TokenState | undefined>>;
}> = ({ hacker, token }): JSX.Element => {
    const { pathname } = useLocation();
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const closeDrawer = (event: { target: any }) => {
            if (drawerRef.current && (drawerRef?.current as any).contains(event.target)) {
                return;
            }

            toggleDrawer(false);
        };

        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
    }, []);

    if (hacker === undefined || token === undefined) {
        // history.push("/login");
    } else if (!authenticateHacker(hacker as HackerState) && !authenticateToken(token as TokenState)) {
        history.push("/401");
    }

    const SubNavbarItemsProps = {
        openDrawer: openDrawer,
    };

    const BreakLine = (): JSX.Element => {
        return <div className="break-line"></div>;
    };

    const getDashboardContent = (): JSX.Element => {
        switch (pathname) {
            case "/dashboard/schedule":
                return <Schedule />;
            case "/dashboard/prizes":
                return <Prizes />;
            case "/dashboard":
            case "/dashboard/live":
            default:
                return <Live time="05 March 2021 22:00:00" />;
        }
    };

    return (
        <Fragment>
            <Navbar showBanner={false} />
            <main className="dashboard">
                <header className="dashboard__sub-navbar">
                    <nav className="dashboard__sub-navbar__nav">
                        <ul className="dashboard__sub-navbar__nav__ul" ref={drawerRef} {...SubNavbarItemsProps}>
                            <li className="dashboard__sub-navbar__nav__ul__li">
                                <Link to="/dashboard" className="dashboard__sub-navbar__nav__ul__li__title">
                                    LIVE
                                </Link>
                                {pathname === "/dashboard" || pathname === "/dashboard/live" ? BreakLine() : null}
                            </li>
                            <li className="dashboard__sub-navbar__nav__ul__li">
                                <Link to="/dashboard/schedule" className="dashboard__sub-navbar__nav__ul__li__title">
                                    SCHEDULE
                                </Link>
                                {pathname === "/dashboard/schedule" ? BreakLine() : null}
                            </li>
                            <li className="dashboard__sub-navbar__nav__ul__li">
                                <Link to="/dashboard/prizes" className="dashboard__sub-navbar__nav__ul__li__title">
                                    PRIZES
                                </Link>
                                {pathname === "/dashboard/prizes" ? BreakLine() : null}
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="dashboard__content">{getDashboardContent()}</section>
                <section className="dashboard__event">
                    <img className="dashboard__event__logo" src={HACKMERCED_LOGO} alt="Logo" />
                    <h1 className="dashboard__event__title">HackMerced VI</h1>
                    <h2 className="dashboard__event__start-title">Hacking Starts</h2>
                    <h3 className="dashboard__event__start-time">March 5, 2021</h3>
                    <h2 className="dashboard__event__end-title">Hacking Ends</h2>
                    <h3 className="dashboard__event__end-time">March 7, 2021</h3>
                </section>
                <section className="dashboard__team">
                    <h1 className="dashboard__team__title">Team Code</h1>
                    <h3 className="dashboard__team__code">fkjlash</h3>
                    <p className="dashboard__team__break">- or -</p>
                    <h2 className="dashboard__team__code-title">Enter Team Code</h2>
                    <input className="dashboard__team__code-input" type="text" id="codeInput" name="password" />
                </section>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Dashboard;
