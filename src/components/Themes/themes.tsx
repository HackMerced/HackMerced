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
                    <h2>Sustainability</h2>
                    <img className="hackathon-tracks" src={SUSTAINABILITY} alt="Sustainability Track" />
                    <p>Hella polaroid lyft, yr pok pok quinoa prism tbh lo-fi health goth four loko vinyl woke. Hot chicken single-origin coffee neutra cold-pressed affogato. Bitters lo-fi hammock woke.</p>
                </div>
                <div className="tracktwo">
                    <h2>Inclusivity</h2>
                    <img className="hackathon-tracks" src={INCLUSIVITY} alt="Inclusivity Track" />
                    <p>Hella polaroid lyft, yr pok pok quinoa prism tbh lo-fi health goth four loko vinyl woke. Hot chicken single-origin coffee neutra cold-pressed affogato. Bitters lo-fi hammock woke.</p>
                </div>
                <div className="trackthree">
                    <h2>Cybersecurity</h2>
                    <img className="hackathon-tracks" src={CYBERSECURITY} alt="Cybersecurity Track" />
                    <p>Hella polaroid lyft, yr pok pok quinoa prism tbh lo-fi health goth four loko vinyl woke. Hot chicken single-origin coffee neutra cold-pressed affogato. Bitters lo-fi hammock woke.</p>
                </div>
            </div>
            
        </section>
    );
};

export default Themes;
