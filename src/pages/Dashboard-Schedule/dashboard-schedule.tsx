import React, { FC } from 'react';
import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import SubNavbar from '../../components/Sub-NavBar/sub-navbar';
import DateBar from '../../components/DateBar/datebar';
import Hackmercedlogo from '../../assets/images/hackmerced-logo.png';
import './dashboard-schedule.scss';

const DashboardSchedule: FC = (): JSX.Element => {
    return (
        <>
            <Navbar showBanner={false} />
            <div className="dashboard-outside-background">
                <section>
                    <SubNavbar backgroundColor="white" textColor="#ffb181" breakLineColor="#ffb181" />

                    <div className="container">
                        <div className="item-a">
                            <div className="orangeRectangle"></div>
                            <DateBar />

                            <div className="flexContainer"></div>
                        </div>

                        <div className="item-b">
                            <img className="logo" src={Hackmercedlogo} alt="Logo" />
                            <h1>HackMerced VI</h1>
                            <h2>Hacking Starts</h2>
                            <h3>March 3, 2020</h3>
                            <h2>Hacking Ends</h2>
                            <h3>March 5, 2020</h3>
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
        </>
    );
};

export default DashboardSchedule;
