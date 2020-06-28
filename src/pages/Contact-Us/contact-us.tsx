import React, { FC } from 'react';

import NavbarOrange from '../../components/NavBar-Orange/navbar';
import Contact from '../../components/Contact-Form/contact-form';
import Footer from '../../components/Footer/footer';

const ContactUs: FC = (): JSX.Element => {
    return (
        <>
            <NavbarOrange />
            <Contact />
            <Footer />
        </>
    );
};

export default ContactUs;
