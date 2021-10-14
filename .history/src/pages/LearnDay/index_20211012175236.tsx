import React, { FC } from "react";

import Navbar from "../../components/NavBar";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return(
        <main className="home"> 
             <Navbar />
        </main>
    );
};

export default LearnDay;