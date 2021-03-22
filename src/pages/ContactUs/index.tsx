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
            <main className="contact-us">
                <div className="contact-us__content">
                    <h1 className="contact-us__content__header">Ways to contact us</h1>
                    <section className="contact-us__content__description">
                        <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,">
                            <FontAwesomeIcon icon={faEnvelope} className="fa contact-us__content__description__icon" />
                        </a>
                        <h4 className="contact-us__content__description__text">
                            Email us at&nbsp;
                            <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,">
                                general@hackmerced.com
                            </a>
                        </h4>
                        <br />
                        <FontAwesomeIcon icon={faUsers} className="fa contact-us__content__description__icon" />
                        <h4 className="contact-us__content__description__text">
                            Connect with our social medias: @hackmerced
                        </h4>
                    </section>
                    <Form formTitle="Message Us" askCompany={false} formRequest="contact" />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default ContactUs;
