import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Title from '../../components/Title Design/title-design';
import Footer from '../../components/Footer/footer';
import AboutUsDesign from '../../components/DesignMercedAboutUs/DesignMercedAboutUs';
import Prompt from '../../components/DesignPrompt/designprompt';
import DesignMercedFAQ from '../../components/DesignMercedFAQ/DesignMercedFAQ';
// import Schedule from '../../components/Schedule Design/schedule-design';
import Sponsors from '../../components/Sponsors Design/sponsors-design';

const DesignMerced: FC = (): JSX.Element => {
    return (
        <main className="DESIGNMERCED">
            <Navbar backgroundColor="#EEEBF5" textColor="#B486CE" breakLineColor="#C4BDDC" showBanner={false} />
            <Title />
            <AboutUsDesign />
            <Prompt />
            <DesignMercedFAQ />
            {/* <Schedule /> */}
            <Sponsors />
            <Footer backgroundColor="#0d0721" textColor="#EEEBF5" fontColor="#EEEBF5" />
        </main>
    );
};

export default DesignMerced;
