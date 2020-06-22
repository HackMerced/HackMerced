import React, { FC } from 'react';

import TEAM from '../../assets/images/hackmerced-v.jpg';
import './about.scss';

const About: FC = (): JSX.Element => {
    return (
        <section className="ABOUT">
            <div className="About">
                <h1>About Us</h1>
                <p>
                    HackMerced is a 36 hour annual programming competition that occurs at the University of California,
                    Merced and is open to students from all over the world. During the event, participants will
                    collaborate in teams and attend workshops to learn about new technologies.
                </p>
                <p>
                    <br />We aim to create a collaborative, interdisciplinary event that brings together students
                    from all universities and prospective sponsors to see the innovation and creativity culminating
                    within the San Joaquin Valley.
                </p>
            </div>
            <div className="TEAMPICTURE">
                <img src={TEAM} width="100%" alt="HackMerced Team" />
            </div>
        </section>
    );
};

export default About;
