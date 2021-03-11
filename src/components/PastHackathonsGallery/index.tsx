import React, { FC } from "react";

import "./styles.scss";

const PastHackathonsGallery: FC<{
    images: Array<string>;
    iteration: string | null;
}> = (props): JSX.Element => {
    const { images, iteration } = props;

    return (
        <section className="HACKMERCED">
            <h1 className="font-black text-center hackmercedv-title"> HackMerced {iteration} Gallery </h1>
            <div className="hackmerced-column">
                <div className="hackmerced-row">
                    <img className="picollage" src={images[0]} alt="HackMerced Team" />
                    <img className="picollage" src={images[1]} alt="HackMerced Team" />
                    <img className="picollage" src={images[2]} alt="HackMerced Team" />
                </div>
                <div className="hackmerced-row">
                    <img className="picollage" src={images[3]} alt="HackMerced Team" />
                    <img className="picollage" src={images[4]} alt="HackMerced Team" />
                    <img className="picollage" src={images[5]} alt="HackMerced Team" />
                </div>
            </div>
        </section>
    );
};

export default PastHackathonsGallery;
