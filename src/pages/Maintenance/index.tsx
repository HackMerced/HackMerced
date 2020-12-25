import React, { FC, Fragment } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

import "./styles.scss";

const Maintenance: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Navbar backgroundColor="#E0E5EC" textColor="#0d0721" breakLineColor="#C4BDDC" showBanner={false} />
            <section className="version-six">
                <div className="back">
                    <a href="https://hackmerced.com" className="text">HackMerced VI</a>
                    <a href="https://hackmerced.com" className="text2">Coming Soon in Spring 2021</a>
                </div>
            </section>
            <Footer backgroundColor="#E0E5EC" textColor="#0d0721" fontColor="#0d0721" />
        </Fragment>
    );
};

export default Maintenance;
