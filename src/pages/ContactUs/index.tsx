import React, { FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUsers } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/NavBar";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import "./styles.scss";

const ContactUs: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Navbar />
            <main className="contact-body">
                <div className="splash-content">
                    <section className="Header text-3xl md:text-5xl">
                        <h1>Ways to contact us</h1>
                    </section>
                    <section className="splash-section">
                        <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,">
                            <FontAwesomeIcon icon={faEnvelope} className="fa" />
                        </a>
                        <h4>Email us at general@hackmerced.com</h4>
                    </section>
                    <section className="splash-section">
                        <FontAwesomeIcon icon={faUsers} className="fa" />
                        <h4>Connect with our social medias: @hackmerced</h4>
                    </section>
                    <Form formTitle="Message Us" askCompany={false} formRequest="contact" />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default ContactUs;
