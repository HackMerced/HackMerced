import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Splash from '../../components/Splash/splash';
import Footer from '../../components/Footer/footer';

const SponsorUs: FC = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Splash />
            <Footer />
        </>
    );
};

export default SponsorUs;
