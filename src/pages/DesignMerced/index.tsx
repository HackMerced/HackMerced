import React, { FC } from "react";

import Navbar from "../../components/NavBar";
import Title from "../../components/TitleDesign";
import Footer from "../../components/Footer";
import AboutUsDesign from "../../components/DesignMercedAboutUs";
import Prompt from "../../components/DesignPrompt";
import DesignMercedFAQ from "../../components/DesignMercedFAQ";
import Schedule from "../../components/ScheduleDesign";
import Sponsors from "../../components/SponsorsDesign";

const DesignMerced: FC = (): JSX.Element => {
    return (
        <main>
            <Navbar backgroundColor="#EEEBF5" textColor="#B486CE" breakLineColor="#C4BDDC" showBanner={false} />
            <Title />
            <AboutUsDesign />
            <Prompt />
            <DesignMercedFAQ />
            <Schedule />
            <Sponsors />
            <Footer backgroundColor="#0d0721" textColor="#EEEBF5" fontColor="#EEEBF5" />
        </main>
    );
};

export default DesignMerced;
