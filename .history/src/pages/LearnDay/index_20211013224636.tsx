import React, { FC } from "react";

import Navbar from "../../components/NavBar";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return (
        /*Title component*/
        <main>
            <Navbar />
            <section className="grid-container">
                <div className="texts">
                    <div className="title">Hacktually II</div>
                    <div className="h2">Local Hack Day: Learn</div>
                    <div className="h3">Learn to tackle new skills, explore different realms of technology, and champion exciting projects in a workshop event hosted by HackMerced on <strong>November 13, 2021.</strong></div>
                    <a target="_blank" href><button className="ld_button">Sign Up</button></a>
                </div>
                <div className="images"></div>
            </section>
        </main>
        /*FAQ component*/
        /* Schedule component*/
        /* render Footer component */
    );
};

export default LearnDay;
