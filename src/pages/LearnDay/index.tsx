import React, { FC } from "react";

import Navbar from "../../components/NavBar";
import FAQ from "../../components/LHDFAQ";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return (
        <main className="LearnDay">
            <Navbar />
            // Title component
            // FAQ component
            <FAQ />
            // Schedule component
        // render Footer component
        </main>
    );
};

export default LearnDay;