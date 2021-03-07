import React, { FC } from 'react';
import SponsorHackMercedVI from '../../assets/images/sponsors-hackmercedvi1.png';
import STICKER_MULE from '../../assets/images/sticker-mule-logo-light.png';
import './HMVISponsors.scss';

const HMVISponsors: FC = (): JSX.Element => {
    return (
        <main className="SponsorsHackMercedVI">
            <section className="sponsor-hackmercedvi-title">
                <h2>Sponsors</h2>
                <img src={SponsorHackMercedVI} width="100%" alt="Our Sponsors for HackMerced VI" />
                <a className="sticker_mule" href="http://hackp.ac/mlh-stickermule-hackathons"><img className="sticker_mule__img" src={STICKER_MULE} /></a>
            </section>
        </main>
    );
};

export default HMVISponsors;
