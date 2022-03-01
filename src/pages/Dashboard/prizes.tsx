import React, { FC } from "react";

import "./styles.scss";

const Prizes: FC = (): JSX.Element => {
    return (
        <div className="dashboard__content__prizes">
            <div className="orange-rectangle"></div>
            {/*<h1 className="dashboard__content__prizes__header">Prizes</h1>*/}
            <ul className="dashboard__content__prizes__ul">
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Open Innovation</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Nintendo Switch for each member
                        <br></br> <br></br> <b>2nd Place </b> - Airpods Wireless Charging for each member <br></br>
                        <br></br> <b>3rd Place</b> - Hydroflask for each member{" "}
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Education</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Nintendo Switch for each member
                        <br></br> <br></br>
                        <b>2nd Place </b> - Airpods Wireless Charging for each member <br></br>
                        <br></br> <b>3rd Place</b> - Hydroflask for each member{" "}
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">CyberSecurity</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Nintendo Switch for each member
                        <br></br> <br></br> <b>2nd Place </b> - Airpods Wireless Charging for each member <br></br>
                        <br></br> <b>3rd Place</b> - Hydroflask for each member{" "}
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Moonshot</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Drones for each member
                        {/*<br></br> <br></br> <b>2nd Place </b> - Nerf Gun for each member*/}
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Design</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Sketch & $100 Amazon gift card for each member <br></br>
                        <br></br>
                        {/*<b>2nd Place</b> - The Design of Everyday Things Book for each member*/}
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Lob API</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - $125 Amazon Gift Card for each member{" "}
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Startup Idea</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Clerky sponsored startup company{" "}
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Hardware Hack</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Bose speaker for each member
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Random picks and activities</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        Raffle prizes
                    </h4>
                </li>
            </ul>
        </div>
    );
};

export default Prizes;
