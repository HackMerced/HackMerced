import React from 'react';

import HACKING from '../../assets/images/hackers2.jpg';
import PRESENTER from '../../assets/images/presenter.jpg';
import PRESENTATIONS from '../../assets/images/presentations.jpg';
import HACKIV from '../../assets/images/hackiv.jpg';
import JUDGES from '../../assets/images/judges.jpg';
import AWARDS from '../../assets/images/awards2.jpg';

import './hackmerced-iv.scss';

const HackMercedIV: React.FC = () => {
    return (
        <section className="HACKMERCED-IV">
            <div className="font-black text-center hackmercedv-title">
                <h1> HackMerced IV Gallery </h1>
            </div>
            <div className="hackv-row">
                <div className="hackv-column">
                    <img className="picollage" src={PRESENTER} alt="HackMerced Team" />
                    <img className="picollage" src={HACKING} alt="HackMerced Team" />
                    <img className="picollage" src={PRESENTATIONS} alt="HackMerced Team" />
                </div>
                <div className="hackv-column">
                    <img className="picollage" src={HACKIV} alt="HackMerced Team" />
                    <img className="picollage" src={AWARDS} alt="HackMerced Team" />
                    <img className="picollage" src={JUDGES} alt="HackMerced Team" />
                </div>
            </div>
        </section>
    );
};

export default HackMercedIV;
