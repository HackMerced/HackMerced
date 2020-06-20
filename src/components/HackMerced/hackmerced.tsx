import React from 'react';

import CHECKIN from '../../assets/images/checkin.jpg';
import HMFOOD from '../../assets/images/hmfood.jpg';
import MACHINE from '../../assets/images/machine.jpg';
import TEACHING from '../../assets/images/teaching.jpg';
import OLDTEAM from '../../assets/images/team-2016.jpg';
import TUTOR from '../../assets/images/tutor.jpg';

import './hackmerced.scss';

const HackMerced: React.FC = () => {
    return (
        <section className="HACKMERCED">
            <div className="font-black text-center hackmercedv-title">
                <h1> HackMerced Gallery </h1>
            </div>
            <div className="hackv-row">
                <div className="hackv-column">
                    <img className="picollage" src={CHECKIN} alt="HackMerced Team" />
                    <img className="picollage" src={HMFOOD} alt="HackMerced Team" />
                    <img className="picollage" src={TEACHING} alt="HackMerced Team" />
                </div>
                <div className="hackv-column">
                    <img className="picollage" src={TUTOR} alt="HackMerced Team" />
                    <img className="picollage" src={OLDTEAM} alt="HackMerced Team" />
                    <img className="picollage" src={MACHINE} alt="HackMerced Team" />
                </div>
            </div>
        </section>
    );
};

export default HackMerced;
