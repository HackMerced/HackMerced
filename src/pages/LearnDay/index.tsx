import React, { FC } from "react";

import Navbar from "../../components/NavBar";
import Schedule from "../../components/Schedule";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return(
        <>
        <Navbar />
        {/* // Title component
        // FAQ component
        // Schedule component */}
        <Schedule />
        {/* // render Footer component */}
        </>
    );
};

export default LearnDay;