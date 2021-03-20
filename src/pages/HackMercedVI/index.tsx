import React, { FC } from 'react';

import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Landing from '../../components/LandingHMVI/landinghmvi';
import Themes from '../../components/Themes/themes';
import FAQ from '../../components/HMVIFAQ/HMVIFAQ';
import Sponsors from '../../components/HMVISponsors/HMVISponsors';

const HackMercedVI: FC = (): JSX.Element => {
    return (
        <main style={{ overflowX: 'hidden' }}>
            <Navbar backgroundColor="#B63F1A" textColor="#FFFFF" breakLineColor="#C4BDDC" showBanner={true} />
            <Landing />
            <Themes />
            <FAQ />
            <Sponsors />
            <Footer backgroundColor="#B63F1A" textColor="#FFFFF" fontColor="#EEEBF5" />
        </main>
    );
};

export default HackMercedVI;
