import React, { FC } from "react";

import LANDING_DESIGN from "../../assets/images/landing-page-hmvi.png";


const LandingHMVI: FC = (): JSX.Element => {
    return (
        <main className="LandingDesign">
            <section className="hackathon-title">
                <img src={LANDING_DESIGN} width="100%" alt="Landing Page HackMerced VI" />
            </section>
        </main>
    );
};

export default LandingHMVI;
