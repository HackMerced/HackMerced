import React from 'react';

import MLHCUPSTACK from '../../assets/images/mlh-cupstack.jpg';
import WINNERSIII from '../../assets/images/winners-iii.jpg';
import AWARDSIII from '../../assets/images/awards-iii.jpg';
import PRIZES from '../../assets/images/prizes-iii.jpg';
import JUDGESIII from '../../assets/images/judges-iii.jpg';
import REDBULL from '../../assets/images/redbull.jpg';

import './hackmerced-iii.scss';

const HackMercedIII: React.FC = () => {
    return (
        <section className="HACKMERCED-III">
            <div className="font-black text-center hackmercedv-title">
                <h1> HackMerced III Gallery </h1>
            </div>
            <div className="hackv-row">
                <div className="hackv-column">
                    <img className="picollage" src={PRIZES} alt="HackMerced Team" />
                    <img className="picollage" src={WINNERSIII} alt="HackMerced Team" />
                    <img className="picollage" src={JUDGESIII} alt="HackMerced Team" />
                </div>
                <div className="hackv-column">
                    <img className="picollage" src={MLHCUPSTACK} alt="HackMerced Team" />
                    <img className="picollage" src={REDBULL} alt="HackMerced Team" />
                    <img className="picollage" src={AWARDSIII} alt="HackMerced Team" />
                </div>
            </div>
        </section>
    );
};

export default HackMercedIII;
