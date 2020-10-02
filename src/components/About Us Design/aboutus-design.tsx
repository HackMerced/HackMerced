import React, { FC } from 'react';

import TEAM from '../../assets/images/hackmerced-v.jpg';
import './aboutus-design.scss';

const AboutUsDesign: FC = (): JSX.Element => {
    return (
        <section className="ABOUTUSDESIGN">
            <h1>The UI/UX Prompt</h1>
            <section className="about">
                <article className="about-description">
                    <div className="aboutUsText">
                        <p>
                            DesignMerced is Merced’s first virtual hackathon for creatives and design individuals in
                            high school and college from around the world. DesignMerced is a 24 hours event that will
                            enhance hackers innovative skills and showcase their own uniqueness of solving art with
                            technology.
                            ‍
                            Students with all levels of coding experience are encouraged to join us and discover their
                            potential as problem-solvers, innovators, and future tech leaders. Look forward to a day of
                            workshops,
                            mentorship, networking, games, and more!
                    </p>
                    </div>
                </article>
                <img src={TEAM} width="100%" alt="HackMerced Team" className="LOGO" />
            </section>
        </section>
    );
};

export default AboutUsDesign;
