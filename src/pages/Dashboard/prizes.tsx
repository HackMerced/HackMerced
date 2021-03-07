import React, { FC } from "react";

import "./styles.scss";

const Prizes: FC = (): JSX.Element => {
    return (
        <div className="dashboard__content__prizes">
            <div className="orange-rectangle"></div>
            <h1 className="dashboard__content__prizes__header">Prizes</h1>
            <ul className="dashboard__content__prizes__ul">
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Inclusiveness</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - $125 Amazon Gift Card for each member
                    <br></br> <br></br> <b>2nd Place </b> - $75 Amazon Gift Card for each member <br></br><br></br> <b>3rd Place</b> - $50 Amazon Gift Card for each member </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Social Good</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - Beats Wireless Headphones for each member
                    <br></br> <br></br><b>2nd Place </b> - Samsung Tracking Smart Band for each member <br></br><br></br> <b>3rd Place</b> - Google Mini for each member  </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">CyberSecurity</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - 5TB WD-Black External Hard Drive for each member
                    <br></br> <br></br> <b>2nd Place </b> - USB Rubber Ducky for each member <br></br><br></br> <b>3rd Place</b> - CanaKit Raspberry Pi 3 for each member   </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Moonshot</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - Moon Lamp Light for each member
                    <br></br> <br></br> <b>2nd Place </b> - Nerf Gun for each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Design</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - Sketch 1-year license for each member <br></br><br></br>
                    <b>2nd Place</b> - The Design of Everyday Things Book for each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best UC Merced Related Hack</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - $125 DoorDash Gift Card for each member  </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Tech for Social Good</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - $125 Gift Card for each member  </h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Use of Google Cloud</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - Google swag bag, pillow, lanyard, and more google swag for each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Domain Name</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - Backpack and wireless charger for each member</h4>
                </li>
                <li className="dashboard__content__prizes__ul__li">
                    <h3 className="dashboard__content__prizes__ul__li__title">Best Hardware Hack</h3>
                    <h4 className="dashboard__content__prizes__ul__li__body"><b>1st Place </b> - Beginner groove kit for each member</h4>
                </li>
                
                
            </ul>
        </div>
    );
};

export default Prizes;
