import React, { FC } from 'react';

import DESIGNTITLE from '../../assets/images/title.png';
import DESIGNDATE from '../../assets/images/date.png';
import ABSTRACTPAINTING from '../../assets/images/paint-purple.jpeg';
import './title-design.scss';

const TitleDesign: FC = (): JSX.Element => {
    return (
        <header className="TITLE__DESIGN">
            <section className="TITLE__DESIGN__designmerced">
                <img
                    src={ABSTRACTPAINTING}
                    width="600px"
                    alt="DESIGNMERCED TITLE"
                    className="TITLE__DESIGN__abstract__painting"
                />
                <div className="TITLE__DESIGN__background__square"></div>
                <img src={DESIGNTITLE} width="600px" alt="DESIGNMERCED TITLE" className="TITLE__DESIGN__title" />
                <img src={DESIGNDATE} width="600px" alt="DESIGNMERCED DATE" className="TITLE__DESIGN__date" />
                <div className="designmerced-subtext text-gray-100">24-hour designathon.</div>
                <div className="designmerced-text text-gray-100">HackMerced&apos;s first</div>
                <button className="apply-button bg-white text-black font-bold">Apply Now</button>
            </section>
        </header>
    );
};

export default TitleDesign;
