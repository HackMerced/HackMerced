import React, { FC } from 'react';
import SponsorDesign from '../../assets/images/sponsor-design.jpg';
import './sponsors-design.scss';

const SponsorsDesign: FC = (): JSX.Element => {
    return (
        <main className="SponsorsDesign">
            <section className="sponsor-designathon-title">
                <img src={SponsorDesign} width="100%" alt="Our Sponsors for DesignMerced" />
            </section>
        </main>
    );
};

export default SponsorsDesign;
