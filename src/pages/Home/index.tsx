import React, { FC } from "react";

import Title from "../../components/Title";
import Navbar from "../../components/NavBar";
import About from "../../components/AboutUs";
import PastWinners from "../../components/PastWinners";
import TeamPics from "../../components/TeamPics";
import Footer from "../../components/Footer";

const Home: FC = (): JSX.Element => {
    return (
        <main>
            <Navbar />
            <Title />
            <About />
            <PastWinners />
            <TeamPics />
            <Footer />
        </main>
    );
};

export default Home;
