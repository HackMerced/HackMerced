import React, { FC } from 'react';

import ABOUT_ICON from '../../assets/images/about-icon.png';
import './DesignMercedAboutUs.scss';

const AboutUsDesign: FC = (): JSX.Element => {
    return (
        <section className="about-us-design">
            <div className="about-us-design__title">About DesignMerced</div>
            <section className="about-us-design__content">
                <article className="about-us-design__content__description">
                    <p className="about-us-design__content__description__text">
                        DesignMerced is UC Merced’s first virtual designathon, hosted by HackMerced for creatives and
                        design individuals in high school and college from around the world. DesignMerced is a 24-hour
                        event that will enhance designer&apos;s and creator&apos;s innovative skills and showcase their
                    uniqueness of solving design with technology. <br></br>
                        <br></br>Students with all levels of design experience are encouraged to join us and discover
                    their potential as problem-solvers, innovators, and future designers. Look forward to a day of
                    workshops, activities, networking, games, and more!
                    </p>
                </article>
                <img src={ABOUT_ICON} alt="About Icon" className="about-us-design__content__logo" />
            </section>
        </section>
    );
};

export default AboutUsDesign;
