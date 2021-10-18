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
            <FAQ />
             <Schedule />
        <Footer/>
        </main>
    );
};

export default LearnDay;