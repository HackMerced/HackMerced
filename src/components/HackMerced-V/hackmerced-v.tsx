import React from 'react';

import HACKERS from '../../assets/images/hackers.jpg';
import HMFOODV from '../../assets/images/hmfood-v.jpg';
import CITRIS from '../../assets/images/citris.jpg';
import SPONSORSV from '../../assets/images/sponsors-v.jpg';
import HEALTHWINNER from '../../assets/images/health2.jpg';
import SHUBAWARD from '../../assets/images/shub-award.jpg';

import './hackmerced-v.scss';

const HackMercedV: React.FC = () => {
    return (
        <section className="HACKMERCED-V">
            <div className="font-black text-center hackmercedv-title">
                <h1> HackMerced V Gallery </h1>
            </div>
            <div className="hackv-row">
                <div className="hackv-column">
                    <img className="picollage" src={HACKERS} alt="HackMerced Team" />
                    <img className="picollage" src={CITRIS} alt="HackMerced Team" />
                    <img className="picollage" src={SHUBAWARD} alt="HackMerced Team" />
                </div>
                <div className="hackv-column">
                    <img className="picollage" src={HMFOODV} alt="HackMerced Team" />
                    <img className="picollage" src={HEALTHWINNER} alt="HackMerced Team" />
                    <img className="picollage" src={SPONSORSV} alt="HackMerced Team" />
                </div>
            </div>
        </section>
    );
};

export default HackMercedV;
