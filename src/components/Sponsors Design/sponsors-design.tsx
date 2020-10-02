import React, { FC } from 'react';

import './sponsors-design.scss';

const SponsorsDesign: FC = (): JSX.Element => {
    return (
        <main className="SponsorsDesign">
            <section className="sponsor-designathon-title">
                <div className="title5">Our Sponsors</div>
            </section>
            <aside className="sponsor-logos"></aside>
        </main>
    );
};

export default SponsorsDesign;
