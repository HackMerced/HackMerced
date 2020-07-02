import React, { FC } from 'react';

import Form from '../Form/Form';
import './contact-form.scss';

const ContactForm: FC = (): JSX.Element => {
    return (
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
                <Form />
            </div>
        </main>
    );
};

export default ContactForm;
