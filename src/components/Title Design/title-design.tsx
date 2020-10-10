import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import useWindowDimensions from '../WindowDimensions/WindowDimensions';
import DESIGN_MERCED_TITLE from '../../assets/images/title-designmerced.png';
import ABSTRACT_PAINTING from '../../assets/images/paint-purple.jpeg';
import './title-design.scss';

const TitleDesign: FC = (): JSX.Element => {
    const { width } = useWindowDimensions();

    return (
        <section className="title-design">
            {width > 1200 ? (
                <>
                    <img
                        src={ABSTRACT_PAINTING}
                        alt="DesignMerced Abstract Painting"
                        className="title-design__abstract-painting"
                    />
                    <div className="title-design__background-square"></div>
                </>
            ) : null}
            <img src={DESIGN_MERCED_TITLE} alt="DesignMerced Title" className="title-design__title" />
            <div className="title-design__heading">
                <div className="title-design__heading__text">HackMerced&apos;s first</div>
                <div className="title-design__heading__subtext">24-hour designathon.</div>
                <Link to="/application" className="title-design__heading__button">
                    Apply Now
                </Link>
            </div>
        </section>
    );
};

export default TitleDesign;
