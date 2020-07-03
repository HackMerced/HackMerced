import React, { FC } from 'react';

import NavbarOrange from '../../components/NavBar-Orange/navbar';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/footer';

const ContactUs: FC = (): JSX.Element => {
    return (
        <>
            <NavbarOrange />
            <main className="contact-body">
                <div className="splash-content">
                    <section className="Header">
                        <h1>Ways to contact us</h1>
                    </section>
                    <section className="splash-section">
                        <h4>Email us at general@hackmerced.com</h4>
                    </section>
                    <section className="splash-section">
                        <h4>Connect with our social medias: @hackmerced</h4>
                    </section>
                    <Form formTitle="Message Us" askCompany={false} />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ContactUs;
