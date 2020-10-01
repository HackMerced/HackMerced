import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

const Footer: FC<{ className?: string }> = ({ className }): JSX.Element => {
    return (
        <footer className={className + " footer"}>
            <section className="Footer-container">
                <nav className="Footer-social">
                    <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,">
                        <FontAwesomeIcon icon={faEnvelope} className="fa text-white" />
                    </a>
                    <a href="https://www.facebook.com/hackmerced/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="fa text-white" />
                    </a>
                    <a href="https://www.instagram.com/hackmerced/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa text-white" />
                    </a>
                    <a
                        href="https://join.slack.com/t/hackmerced-v/shared_invite/enQtODUyNzkxMDY2NjkyLTZiODAyZjNiYTFjZTlkYTQ0NDVhOGQ5OTI3OTEzNjAxMDBiZTdjY2QyMTI0ZGE4MTlhMmNhMGYyNzQzOGNhZTI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faSlack} className="fa text-white" />
                    </a>
                    <a href="https://github.com/HackMerced" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="fa text-white" />
                    </a>
                    <a
                        href="https://devpost.com/hackathons?utf8=%E2%9C%93&search=HackMerced&challenge_type=all&sort_by=Recently+Added"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faCode} className="fa text-white" />
                    </a>
                </nav>
            </section>
            <section className="credits">
                <span className="copyright">
                    © 2020 HackMerced. All Rights Reserved.
                    <br /> Made with ♡ by HackMerced.
                </span>
            </section>
        </footer>
    );
};
export default Footer;
