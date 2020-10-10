import React, { FC } from 'react';

import TEAM_PICTURE from '../../assets/images/hackmerced-v.jpg';
import './AboutUs.scss';

const About: FC = (): JSX.Element => {
    return (
        <section className="about-us">
            <h1 className="about-us__title">About Us</h1>
            <div className="about-us__break-line"></div>
            <section className="about-us__content">
                <article className="about-us__content__description">
                    <p>
                        HackMerced is a 36 hour annual programming competition that occurs at the University of
                        California, Merced and is open to students from all over the world. During the event,
                        participants will collaborate in teams and attend workshops to learn about new technologies.
                        <br />
                        <br />
                        We aim to create a collaborative, interdisciplinary event that brings together students from all
                        universities and prospective sponsors to see the innovation and creativity culminating within
                        the San Joaquin Valley.
                    </p>
                </article>
                <img className="about-us__content__team-picture" src={TEAM_PICTURE} alt="HackMerced Team" />
            </section>
        </section>
    );
};

export default About;
