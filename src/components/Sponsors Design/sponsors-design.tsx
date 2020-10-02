import React, { FC } from 'react';
import SponsorDesign from '../../assets/images/sponsor-design1.jpg';
import './sponsors-design.scss';

const SponsorsDesign: FC = (): JSX.Element => {
    return (
        <main className="SponsorsDesign">
            <section className="sponsor-designathon-title">
                <div className="title5">Our Sponsors</div>
            </section>
            <aside className="sponsor-logos">
                <img src={SponsorDesign} width="100%" alt="Sponsors for Designathon" />
            </aside>
        </main>
    );
};

export default SponsorsDesign;
