import React, { FC } from 'react';

import TEAM from '../../assets/images/hackmerced-v.jpg';
import './aboutus-design.scss';

const AboutUsDesign: FC = (): JSX.Element => {
    return (
        <section className="ABOUTUSDESIGN">
            <h1>About DesignMerced</h1>
            <section className="about">
                <article className="about-description">
                    <div className="aboutUsText">
                        <p>
                            DesignMerced is HackMerced’s first virtual designathon for creatives and design individuals
                            in high school and college from around the world. DesignMerced is a 24-hour event that will
                            enhance designers/creators innovative skills and showcase their own uniqueness of solving
                            art with technology. ‍<br></br>
                            <br></br>
                            Students with all levels of design experience are encouraged to join us and discover their
                            potential as problem-solvers, innovators, and future designers. Look forward to a day of
                            workshops, mentorship, networking, games, and more!
                        </p>
                    </div>
                </article>
                <aside>
                    <img src={TEAM} width="100%" alt="HackMerced Team" className="LOGO" />
                </aside>
            </section>
        </section>
    );
};

export default AboutUsDesign;
