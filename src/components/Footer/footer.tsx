import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

// function generateBalls(): void {
//     for (const i = 0; i < Math.floor(window.innerWidth / 20); i++) {
//         $('.gooey-animations').append(`
//       <div class="ball"></div>
//     `);
//         let colors = ['#28323B', '#FFA036'];
//         $('.ball')
//             .eq(i)
//             .css({
//                 bottom: '0px',
//                 left: Math.random() * window.innerWidth - 100,
//                 'animation-delay': Math.random() * 5 + 's',
//                 transform: 'translateY(' + Math.random() * 10 + 'px)',
//                 'background-color': colors[i % 2],
//             });
//     }
// }
// generateBalls();

// window.addEventListener('resize', function(e) {
//     $('.gooey-animations .ball').remove();
//     generateBalls();
// });

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="gooey-animations"></div>
            <section className="Footer-container">
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
            </section>
            <section className="credits">
                <span className="copyright">
                    © 2020 HackMerced. All Rights Reserved.
                    <br /> Made with 💓 by HackMerced.
                </span>
            </section>
        </footer>
    );
};
export default Footer;
