import React, { FC } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faInstagram, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';

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

                <form className="splash-form">
                    <h3>Message Us</h3>
                    <input id="nameInput" placeholder="Full Name"></input>
                    <input id="emailInput" placeholder="Email"></input>
                    <textarea id="contenInput" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>

                {/* <section className="footer Footer-container">
                    <nav className="Footer-social">
                        <a
                            href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,"
                            style={{ color: '#0000' }}
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="fa" />
                        </a>
                        <a
                            href="https://www.facebook.com/hackmerced/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0000' }}
                        >
                            <FontAwesomeIcon icon={faFacebook} className="fa" />
                        </a>
                        <a
                            href="https://www.instagram.com/hackmerced/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0000' }}
                        >
                            <FontAwesomeIcon icon={faInstagram} className="fa" />
                        </a>
                        <a
                            href="https://join.slack.com/t/hackmerced-v/shared_invite/enQtODUyNzkxMDY2NjkyLTZiODAyZjNiYTFjZTlkYTQ0NDVhOGQ5OTI3OTEzNjAxMDBiZTdjY2QyMTI0ZGE4MTlhMmNhMGYyNzQzOGNhZTI"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0000' }}
                        >
                            <FontAwesomeIcon icon={faSlack} className="fa" />
                        </a>
                        <a
                            href="https://github.com/HackMerced"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0000' }}
                        >
                            <FontAwesomeIcon icon={faGithub} className="fa" />
                        </a>
                        <a
                            href="https://devpost.com/hackathons?utf8=%E2%9C%93&search=HackMerced&challenge_type=all&sort_by=Recently+Added"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0000' }}
                        >
                            <FontAwesomeIcon icon={faCode} className="fa" />
                        </a>
                    </nav>
                </section> */}
            </div>
        </main>
    );
};

export default ContactForm;
