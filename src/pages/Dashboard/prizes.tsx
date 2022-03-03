import React, { FC } from "react";

import "./styles.scss";

const Prizes: FC = (): JSX.Element => {
    return (
        <div className="dashboard__content__prizes">
            <div className="orange-rectangle"></div>
            <h1 className="dashboard__content__prizes__header">Prizes</h1>
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
                    <h3 className="dashboard__content__prizes__ul__li__title">Best in Sustainability</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - 1x Raspberry pi for each team member
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Domain Name from Domain.com</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - PowerSquare Qi Wireless Phone Charger
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Use of Auth0</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Exclusive Auth0 Swag made for MLH Winners (Branded Tumbler, Rubik's Cube and Sticker) 
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Most Creative Use of GitHub </h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - GitHub Octocat Statue, Plushy and Sticker bundle
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Hardware Hack Sponsored by Digi-Key</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Grove Beginner Kit
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Most Creative Use of Twilio</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Twilio Swag Box GameGo Console
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Use of MATLAB</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - MathWorks Swag Bag
                    </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Use of DeSo</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - $100 worth of $DESO coin and an exclusive DeSo Tumbler
                    </h4>
                </li>
                {/* <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">CapitalOne</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">
                        <b>1st Place </b> - Soon to be announced.
                    </h4>
                </li> */}
            </ul>
        </div>
    );
};

export default Prizes;
