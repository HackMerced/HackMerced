import React, { FC, Fragment } from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SubNavbar from "../../components/SubNavBar";
import DateBar from "../../components/DateBar";
import HACKMERCED_LOGO from "../../assets/images/hackmercedvi-logo.png";
import "./styles.scss";

const DashboardSchedule: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Navbar showBanner={false} />
            <div className="dashboard-outside-background">
                <section>
                    <SubNavbar backgroundColor="#F0F0F3" textColor="#ffb181" breakLineColor="#ffb181" />

                    <div className="container">
                        <div className="item-a">
                            <div className="orangeRectangle"></div>
                            <DateBar />

                            <div className="flexContainer"></div>
                        </div>

                        <div className="item-b">
                            <img className="logo" src={HACKMERCED_LOGO} alt="Logo" />
                            <h1>HackMerced VI</h1>
                            <h2>Hacking Starts</h2>
                            <h3>March 5, 2020</h3>
                            <h2>Hacking Ends</h2>
                            <h3>March 7, 2020</h3>
                        </div>

                        <div className="item-c">
                            <h1>Team Code</h1>
                            <h3>fkjlash</h3>
                            <p>- or -</p>
                            <h2>Enter Team Code</h2>
                            <input className="teamcodeInput" type="password" id="codeInput" name="password"></input>
                        </div>
                    </div>
                </section>
                <aside></aside>
            </div>
            <Footer />
        </Fragment>
    );
};

export default DashboardSchedule;
