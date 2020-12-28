import React, { FC } from "react";

import "./styles.scss";

const Prizes: FC = (): JSX.Element => {
    return (
        <div className="dashboard__content__prizes">
            <div className="orange-rectangle"></div>
            <h1 className="dashboard__content__prizes__header">Prizes</h1>
            <ul className="dashboard__content__prizes__ul">
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best in Design</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">Fujifilms to each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Social Good</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">Nintendo Switch to each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Health</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">Airpods to each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Sustainability</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">$100 Amazon Gift Card to each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Hardware Hack</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">Raspberry Pi to each member</h4>
                </li>
                <li  className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Beginner Hack</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body">Mechanical Keyboard to each member</h4>
                </li>
            </ul>
        </div>
    );
};

export default Prizes;
