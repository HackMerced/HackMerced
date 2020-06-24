import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Contact from '../../components/Contact-Form/contact-form';
import Footer from '../../components/Footer/footer';

const ContactUs: FC = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Contact />
            <Footer />
        </>
    );
};

export default ContactUs;
