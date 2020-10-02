import React, { FC } from 'react';
import mlhPLACEHOLDER from '../../assets/images/mlhPLACEHOLDER.png';
import MicrosoftPLACEHOLDER from '../../assets/images/MicrosoftPLACEHOLDER.png';
import digitaloceanPLACEHOLDER from '../../assets/images/digitaloceanPLACEHOLDER.png';

import './sponsors-design.scss';

const SponsorsDesign: FC = (): JSX.Element => {
    return (
        <main className="SponsorsDesign">
            <section>

                <div className="grid-container1">
                    <img src={ mlhPLACEHOLDER } className="item1" alt="Title Asset"></img>
                    
                    <img src={ MicrosoftPLACEHOLDER } className="item2" alt="WhitePebble"></img>
                    <img src={ digitaloceanPLACEHOLDER } className="item3" alt="Boche"></img>
                </div>

                <div className="grid-container2">
                    <img src={ digitaloceanPLACEHOLDER } className="item4" alt="Other"></img>
                    {/* <img src={ TRUMAN } className="item5" alt="Other"></img>    uncomment if we have a 4th sponsor! Also uncomment item5's css */}
                </div>

            </section>
        </main>
    );
};

export default SponsorsDesign;
