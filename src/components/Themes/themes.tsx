import React, { FC } from 'react';

import SUSTAINABILITY from '../../assets/images/sustainability.png';
import INCLUSIVITY from '../../assets/images/inclusivity.png';
import CYBERSECURITY from '../../assets/images/cybersecurity.png';

import './themes.scss';

const Themes: FC = (): JSX.Element => {
    return (
        <section className="entire-container">
            <h1>Themes</h1>

            <div className="flex-container">
                <div className="trackone">
                    <h2>Social Good</h2>
                    <img className="hackathon-tracks" src={SUSTAINABILITY} alt="Sustainability Track" />
                    <p>Social Good also known as common good, focuses on societal problems and potential to offer meaningful solutions. Create a project to bring the world to a more equitable and sustainable path.</p>
                </div>
                <div className="tracktwo">
                    <h2>Inclusivity</h2>
                    <img className="hackathon-tracks" src={INCLUSIVITY} alt="Inclusivity Track" />
                    <p>Diversity is an integral part of our history, culture, and identity. Inclusion is the way we treat and perceive all differences. Create a project to accelerate the approach to diversity and inclusion.</p>
                </div>
                <div className="trackthree">
                    <h2>Cybersecurity</h2>
                    <img className="hackathon-tracks" src={CYBERSECURITY} alt="Cybersecurity Track" />
                    <p>The substantial use of technology has made it vital to safeguard ourselves from unapproved access. Private information and data are more exposed than before to such unpleasantries. Create a project to enrich a safe digital world.</p>
                </div>
            </div>
            
        </section>
    );
};

export default Themes;
