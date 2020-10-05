import React, { FC } from 'react';

import Title from '../../assets/images/title.png';
import Date from '../../assets/images/date.png';
import TitleBox1 from '../../assets/images/paint-purple.jpeg';
import './title-design.scss';

const TitleDesign: FC = (): JSX.Element => {
    return (
        <header className="TITLEDESIGN">
            <section className="designmerced">
                <img src={TitleBox1} width="600px" alt="DESIGNMERCED TITLE" className="image-square" />
                <div className="background-square"></div>
                <img src={Title} width="600px" alt="DESIGNMERCED TITLE" className="designmerced-title" />
                <img src={Date} width="600px" alt="DESIGNMERCED DATE" className="designmerced-date" />
                <div className="designmerced-subtext text-gray-100">24 hour designathon.</div>
                <div className="designmerced-text text-gray-100">HackMerced&apos;s first</div>
                <button className="apply-button bg-white text-black font-bold">Apply Now</button>
            </section>
        </header>
    );
};

export default TitleDesign;
