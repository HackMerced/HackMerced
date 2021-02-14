import React, { FC, Fragment, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import "./styles.scss";
import { HackerState, TokenState } from "../../App.types";
import HACKMERCED_LOGO from "../../assets/images/hackmercedvi-logo.png";
import Live from "./live";
import Schedule from "./schedule";
import Prizes from "./prizes";
import { environment } from "../../environments";

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
}> = ({ hacker, token }): JSX.Element => {
    const { pathname } = useLocation();
    const [code, setCode] = useState<string>("");
    const history = useHistory();

    if (hacker === undefined || token === undefined) {
        // history.push("/login");
    } else if (!authenticateHacker(hacker as HackerState) && !authenticateToken(token as TokenState)) {
        history.push("/401");
    } else {
        setCode(hacker?.teamCode);
    }

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
                return <Live time="12 March 2021 22:00:00" />;
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCode(event.target.value);
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        Axios.post(
            `${environment.HACKER_API}/v1/auth/login`,
            {
                hacker: hacker?.id,
                teamCode: code,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        ).then((response: AxiosResponse) => {
            if (response.status === 201 && response.statusText === "CREATED") {
                // updateHacker({ ...hacker, teamCode: code });
                console.table({ ...hacker, teamCode: code });
            }
        });
    };

    return (
        <Fragment>
            <Navbar showBanner={false} />
            <main className="dashboard">
                <header className="dashboard__sub-navbar">
                    <nav className="dashboard__sub-navbar__nav">
                        <ul className="dashboard__sub-navbar__nav__ul">
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
                <aside className="dashboard__aside">
                    <section className="dashboard__aside__event">
                        <img className="dashboard__aside__event__logo" src={HACKMERCED_LOGO} alt="Logo" />
                        <h1 className="dashboard__aside__event__title">HackMerced VI</h1>
                        <h2 className="dashboard__aside__event__start-title">Hacking Starts</h2>
                        <h3 className="dashboard__aside__event__start-time">March 5, 2021</h3>
                        <h2 className="dashboard__aside__event__end-title">Hacking Ends</h2>
                        <h3 className="dashboard__aside__event__end-time">March 7, 2021</h3>
                    </section>
                    <section className="dashboard__aside__team">
                        <h1 className="dashboard__aside__team__title">Team Code</h1>
                        <h3 className="dashboard__aside__team__code">{code === "" ? "No Team" : code}</h3>
                        <p className="dashboard__aside__team__break">- or -</p>
                        <h2 className="dashboard__aside__team__code-title">Enter Team Code</h2>
                        <form className="dashboard__aside__team__code-container" onSubmit={handleSubmit}>
                            <input
                                className="dashboard__aside__team__code-container__input"
                                type="text"
                                onChange={handleInputChange}
                            />
                            <button className="dashboard__aside__team__code-container__submit" type="submit">
                                <FontAwesomeIcon icon={faPlay} className="blackicon" />
                            </button>
                        </form>
                    </section>
                </aside>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Dashboard;
