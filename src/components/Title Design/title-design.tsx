import React, { FC } from 'react';

import Title from '../../assets/images/title.png';
import Date from '../../assets/images/date.png';
import './title-design.scss';

const TitleDesign: FC = (): JSX.Element => {
    return (
        <header className="TITLEDESIGN">
            <section className="designmerced">
                <div className="background-square"></div>
                <div className="image-square"></div>
                <img src={Title} width="600px" alt="DESIGNMERCED TITLE" className="designmerced-title" />
                <img src={Date} width="600px" alt="DESIGNMERCED DATE" className="designmerced-date" />
                <div className="designmerced-subtext text-gray-100">24 hour designathon.</div>
                <div className="designmerced-text text-gray-100">HackMerced's first</div>
                <button className="apply-button bg-white text-black font-bold">Apply Now</button>
            </section>
        </header>
    );
};

export default TitleDesign;
