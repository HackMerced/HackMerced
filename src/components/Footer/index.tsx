import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";

import "./styles.scss";

const Footer: FC<{ backgroundColor?: string; textColor?: string; fontColor?: string }> = ({
    backgroundColor,
    textColor,
    fontColor,
}): JSX.Element => {
    // Generate the footer Icons
    const footerIcons = (icon: IconDefinition) => {
        return <FontAwesomeIcon icon={icon} className="fa text-white" style={{ color: fontColor }} />;
    };

    return (
        <footer className="footer" style={{ backgroundColor, color: textColor }}>
            <section className="footer__container">
                <nav className="footer__container__social">
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
                        href="https://www.youtube.com/channel/UC7Fx0ZXRo31YIj-XEg_XUeA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {footerIcons(faYoutube)}
                    </a>
                    <a
                        href="https://github.com/HackMerced?q=&type=source&language="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
            <section className="footer__credits">
                <span className="footer__credits__copyright">
                    © 2021 HackMerced. All Rights Reserved.
                    <br /> Made with ♡ by HackMerced.
                </span>
            </section>
        </footer>
    );
};
export default Footer;
