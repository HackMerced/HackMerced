import React, { FC } from 'react';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import SubNavbar from '../../components/Sub-NavBar/sub-navbar';
import Hackmercedlogo from '../../assets/images/hackmercedvi-logo.png';

import './dashboard-prizes.scss'

const DashboardPrizes: FC = (): JSX.Element => {
    return (
        <>
            <Navbar showBanner={false} />
            <div className="dashboard-outside-background">
                <section>
                    <SubNavbar backgroundColor="#F0F0F3" textColor="#ffb181" breakLineColor="#ffb181" />

                    <div className="container">
                        <div className="category-prizes">
                            <h1>Prizes</h1>

                            <div className="category-prize-list">
                                <div>
                                    <h3>Best in Design</h3>
                                    <h4>Fujifilms to each member</h4>
                                </div>
                                <div>
                                    <h3>Social Good</h3>
                                    <h4>Nintendo Switch to each member</h4>
                                </div>
                                <div>
                                    <h3>Health</h3>
                                    <h4>Airpods to each member</h4>
                                </div>
                                <div>
                                    <h3>Sustainability</h3>
                                    <h4>$100 Amazon Gift Card to each member</h4>
                                </div>
                                <div>
                                    <h3>Best Hardware Hack</h3>
                                    <h4>Raspberry Pi to each member</h4>
                                </div>
                                <div>
                                    <h3>Best Beginner Hack</h3>
                                    <h4>Mechanical Keyboard to each member</h4>
                                </div>
                            </div>
                        </div>

                        <div className="event-schedule">
                            <img className="logo" src={Hackmercedlogo} alt="Logo" />
                            <h1>HackMerced VI</h1>
                            <h2>Hacking Starts</h2>
                            <h3>March 5, 2020</h3>
                            <h2>Hacking Ends</h2>
                            <h3>March 7, 2020</h3>
                        </div>

                        <div className="team-code">
                            <h1>Team Code</h1>
                            <h3>fkjlash</h3>
                            <p>- or -</p>
                            <h2>Enter Team Code!</h2>
                            <input className="teamcodeInput" type="password" id="codeInput" name="password"></input>
                            <button className = "submitButton" type="button">Submit</button>
                        </div>
                    </div>

                </section>
                <aside>
                </aside>
            </div>
            <Footer />
        </>
    );
};

export default DashboardPrizes;
