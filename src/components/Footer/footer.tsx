import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

const Footer: FC<{ backgroundColor?: string; textColor?: string; fontColor?: string }> = ({
    backgroundColor,
    textColor,
    fontColor,
}): JSX.Element => {
    const footerIcons = (icon: any) => {
        return <FontAwesomeIcon icon={icon} className="fa text-white" style={{ color: fontColor }} />;
    };
    return (
        <footer className="footer" style={{ backgroundColor, color: textColor }}>
            <section className="Footer-container">
                <nav className="Footer-social">
                    <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,">
                        {footerIcons(faEnvelope)}
                    </a>
                    <a href="https://www.facebook.com/hackmerced/" target="_blank" rel="noopener noreferrer">
                        {footerIcons(faFacebook)}
                    </a>
                    <a href="https://www.instagram.com/hackmerced/" target="_blank" rel="noopener noreferrer">
                        {footerIcons(faInstagram)}
                    </a>
                    <a
                        href="https://join.slack.com/t/hackmerced-v/shared_invite/enQtODUyNzkxMDY2NjkyLTZiODAyZjNiYTFjZTlkYTQ0NDVhOGQ5OTI3OTEzNjAxMDBiZTdjY2QyMTI0ZGE4MTlhMmNhMGYyNzQzOGNhZTI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {footerIcons(faSlack)}
                    </a>
                    <a href="https://github.com/HackMerced" target="_blank" rel="noopener noreferrer">
                        {footerIcons(faGithub)}
                    </a>
                    <a
                        href="https://devpost.com/hackathons?utf8=%E2%9C%93&search=HackMerced&challenge_type=all&sort_by=Recently+Added"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {footerIcons(faCode)}
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
