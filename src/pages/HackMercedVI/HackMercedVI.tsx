import React, { FC } from "react";

import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
import Landing from "../../components/LandingHMVI/landinghmvi";

const HackMercedVI: FC = (): JSX.Element => {
    return (
        <main>
            <Navbar backgroundColor="#B63F1A" textColor="#FFFFF" breakLineColor="#C4BDDC" showBanner={false} />
            <Landing />
            <Footer backgroundColor="#B63F1A" textColor="#FFFFF" fontColor="#EEEBF5" />
        </main>
    );
};

export default HackMercedVI;