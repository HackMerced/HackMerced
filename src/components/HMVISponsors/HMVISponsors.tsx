import React, { FC } from 'react';
import SponsorHackMercedVI from '../../assets/images/sponsors-hackmercedvi.png';
import './HMVISponsors.scss';

const HMVISponsors: FC = (): JSX.Element => {
    return (
        <main className="SponsorsHackMercedVI">
            <section className="sponsor-hackmercedvi-title">
                <h2>Sponsors</h2>
                <img src={SponsorHackMercedVI} width="100%" alt="Our Sponsors for HackMerced VI" />
            </section>
        </main>
    );
};

export default HMVISponsors;
