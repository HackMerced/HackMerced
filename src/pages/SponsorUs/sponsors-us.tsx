import React, { FC } from 'react';

import NavbarOrange from '../../components/NavBar-Orange/navbar';
import Splash from '../../components/Splash/splash';
import Footer from '../../components/Footer/footer';

const SponsorUs: FC = (): JSX.Element => {
    return (
        <>
            <NavbarOrange />
            <Splash />
            <Footer />
        </>
    );
};

export default SponsorUs;
