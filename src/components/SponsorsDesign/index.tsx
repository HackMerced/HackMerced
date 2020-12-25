import React, { FC } from "react";

import SPONSOR_DESIGN from "../../assets/images/sponsor-design.jpg";
import "./styles.scss";

const SponsorsDesign: FC = (): JSX.Element => {
    return (
        <main className="SponsorsDesign">
            <section className="sponsor-designathon-title">
                <img src={SPONSOR_DESIGN} width="100%" alt="Our Sponsors for DesignMerced" />
            </section>
        </main>
    );
};

export default SponsorsDesign;
