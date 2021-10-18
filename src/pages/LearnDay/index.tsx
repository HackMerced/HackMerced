import React, { FC } from "react";

import Navbar from "../../components/NavBar";
import FAQ from "../../components/LHDFAQ";
import Schedule from "../../components/Schedule";
import Footer from "../../components/Footer";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return (
        <main className="LearnDay">
            <Navbar />
            <section className="grid-container">
                <div className="texts">
                    <div className="title">Hacktually II</div>
                    <div className="h2">Local Hack Day: Learn</div>
                    <div className="h3">
                        Learn to tackle new skills, explore different realms of technology, and champion exciting
                        projects in a workshop event hosted by HackMerced on <strong>November 13, 2021.</strong>
                    </div>
                    <button className="ld_button">Sign Up</button>
                </div>
                <div className="images"></div>
            </section>
            <Schedule />
            <FAQ />
            <Footer />
        </main>
    );
};

export default LearnDay;
