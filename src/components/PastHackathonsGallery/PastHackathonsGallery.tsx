import React, { FC } from 'react';

import './PastHackathonsGallery.scss';
import { PastHackathonsGalleryProps } from './PastHackathonsGallery.types';

const PastHackathonsGallery: FC<PastHackathonsGalleryProps> = (props): JSX.Element => {
    const { images, iteration } = props;

    return (
        <section className="HACKMERCED">
            <div className="font-black text-center hackmercedv-title">
                <h1> HackMerced {iteration} Gallery </h1>
            </div>
            <div className="hackv-row">
                <div className="hackv-column">
                    <img className="picollage" src={images[0]} alt="HackMerced Team" />
                    <img className="picollage" src={images[1]} alt="HackMerced Team" />
                    <img className="picollage" src={images[2]} alt="HackMerced Team" />
                </div>
                <div className="hackv-column">
                    <img className="picollage" src={images[3]} alt="HackMerced Team" />
                    <img className="picollage" src={images[4]} alt="HackMerced Team" />
                    <img className="picollage" src={images[5]} alt="HackMerced Team" />
                </div>
            </div>
        </section>
    );
};

export default PastHackathonsGallery;
