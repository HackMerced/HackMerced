import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Title from '../../components/Title Design/title-design';
import Footer from '../../components/Footer/footer';
import Prompt from '../../components/DesignPrompt/designprompt';
import Schedule from '../../components/Schedule Design/schedule-design';
import AboutUsDesign from '../../components/About Us Design/aboutus-design'
import Sponsors from '../..//components/Sponsors Design/sponsors-design';

const DesignMerced: FC = (): JSX.Element => {
    return (
        <main className="DESIGNMERCED">
            <Navbar backgroundColor="#EEEBF5" textColor="#B486CE" breakLineColor="#C4BDDC" showBanner={false} />
            <Title />
            <AboutUsDesign />
            <Prompt />
            <Schedule />
            <Sponsors />
            <Footer backgroundColor="#EEEBF5" textColor="#B486CE" fontColor="#B486CE" />
        </main>
    );
};

export default DesignMerced;
