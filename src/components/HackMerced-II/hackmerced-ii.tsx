import React from 'react';

import SPEAKERII from '../../assets/images/speaker-ii.jpg';
import HACKERSII from '../../assets/images/hackers-ii.jpg';
import COLLABORATION from '../../assets/images/collaboration.jpg';
import CHECKINGINII from '../../assets/images/checking-in-ii.jpg';
import MLHII from '../../assets/images/mlh-ii.jpg';
import SPONSORSII from '../../assets/images/sponsors-ii.jpg';

import './hackmerced-ii.scss';

const HackMercedII: React.FC = () => {
    return (
        <section className="HACKMERCED-III">
            <div className="font-black text-center hackmercedv-title">
                <h1> HackMerced II Gallery </h1>
            </div>
            <div className="hackv-row">
                <div className="hackv-column">
                    <img className="picollage" src={SPEAKERII} alt="HackMerced Team" />
                    <img className="picollage" src={CHECKINGINII} alt="HackMerced Team" />
                    <img className="picollage" src={COLLABORATION} alt="HackMerced Team" />
                </div>
                <div className="hackv-column">
                    <img className="picollage" src={HACKERSII} alt="HackMerced Team" />
                    <img className="picollage" src={SPONSORSII} alt="HackMerced Team" />
                    <img className="picollage" src={MLHII} alt="HackMerced Team" />
                </div>
            </div>
        </section>
    );
};

export default HackMercedII;
