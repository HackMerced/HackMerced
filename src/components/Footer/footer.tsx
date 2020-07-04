import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

class Footer extends Component {
    state = {
        balls: [],
    };

    private constructor(props: Readonly<{}>) {
        super(props);
        this.generateBalls = this.generateBalls.bind(this);
    }

    public componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ balls: [] });
            this.generateBalls();
        });

        this.generateBalls();
    }

    private generateBalls(): void {
        let balls: Array<JSX.Element> = [];

        for (let i = 0; i < Math.floor(window.innerWidth / 20); i++) {
            const colors = ['#28323B', '#FFA036'];
            const style = {
                bottom: '0px',
                left: Math.random() * window.innerWidth - 100,
                animationDelay: Math.random() * 5 + 's',
                transform: 'translateY(' + Math.random() * 10 + 'px)',
                backgroundColor: colors[i % 2],
            };

            balls.push(<div className="ball" key={i} style={style}></div>);
        }

        this.setState({ balls });
    }

    public render() {
        return (
            <footer className="footer">
                <div className="gooey-animations">{this.state.balls}</div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <svg viewBox="0 0 1440 328" width="100vw">
                    <defs>
                        <clipPath
                            id="wave"
                            clipPathUnits="objectBoundingBox"
                            transform="scale(0.00069444444, 0.00304878048)"
                        >
                            <path d="M504.452 27.7002C163.193 -42.9551 25.9595 38.071 0 87.4161V328H1440V27.7002C1270.34 57.14 845.711 98.3556 504.452 27.7002Z" />
                        </clipPath>
                    </defs>
                </svg>

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
    }
}

export default Footer;
