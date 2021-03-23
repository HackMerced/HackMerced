import React, { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";
import Accordian from "../../components/Accordian";

import DESIGN_MERCED_TITLE from "../../assets/images/title-designmerced.png";
import ABSTRACT_PAINTING from "../../assets/images/paint-purple.jpeg";
import ABOUT_ICON from "../../assets/images/about-icon.png";
import PROMPT_ICON from "../../assets/images/lightbulb-layers.png";
import SPONSOR_DESIGN from "../../assets/images/sponsor-design.jpg";

import { FAQData } from "../../assets/faq";
import { schedule } from "../../assets/schedule";

import "./styles.scss";

const DesignMerced: FC = (): JSX.Element => {
    const { width } = useWindowDimensions();
    const [day, setDay] = useState<number>(21);

    // Generate Schedule for the DesignMerced
    const generateSchedule = (): JSX.Element => {
        const scheduleElements: Array<JSX.Element> = [];

        schedule.forEach((e: { day: number; title: string; body: string }) => {
            if (e.day === day) {
                scheduleElements.push(
                    <div className="design-merced__schedule__article__container__calendar__events__event">
                        <div className="design-merced__schedule__article__container__calendar__events__event__dot dot__active"></div>
                        <div className="design-merced__schedule__article__container__calendar__events__event__title">
                            {e.title}
                        </div>
                        <div className="design-merced__schedule__article__container__calendar__events__event__body">
                            {e.body}
                        </div>
                    </div>,
                );
            }
        });

        return <div className="design-merced__schedule__article__container__calendar__events">{scheduleElements}</div>;
    };

    return (
        <main className="design-merced">
            <Navbar backgroundColor="#EEEBF5" textColor="#B486CE" breakLineColor="#C4BDDC" showBanner={false} />
            {/* Landing Header */}
            <section className="design-merced__header">
                {width > 1200 ? (
                    <Fragment>
                        <img
                            src={ABSTRACT_PAINTING}
                            alt="DesignMerced Abstract Painting"
                            className="design-merced__header__abstract-painting"
                        />
                        <div className="design-merced__header__background-square"></div>
                    </Fragment>
                ) : null}
                <img src={DESIGN_MERCED_TITLE} alt="DesignMerced Title" className="design-merced__header__title" />
                <div className="design-merced__header__info">
                    <div className="design-merced__header__info__text">HackMerced&apos;s first</div>
                    <div className="design-merced__header__info__subtext">24-hour designathon.</div>
                    <Link to="/application" className="design-merced__header__info__button">
                        Apply Now
                    </Link>
                </div>
            </section>
            {/* About Us Section */}
            <section className="design-merced__about-us">
                <div className="design-merced__about-us__title">About DesignMerced</div>
                <section className="design-merced__about-us__content">
                    <article className="design-merced__about-us__content__description">
                        <p className="design-merced__about-us__content__description__text">
                            DesignMerced is UC Merced’s first virtual designathon, hosted by HackMerced for creatives
                            and design individuals in high school and college from around the world. DesignMerced is a
                            24-hour event that will enhance designer&apos;s and creator&apos;s innovative skills and
                            showcase their uniqueness of solving design with technology. <br></br>
                            <br></br>Students with all levels of design experience are encouraged to join us and
                            discover their potential as problem-solvers, innovators, and future designers. Look forward
                            to a day of workshops, activities, networking, games, and more!
                        </p>
                    </article>
                    <img src={ABOUT_ICON} alt="About Icon" className="design-merced__about-us__content__logo" />
                </section>
            </section>
            {/* Prompt Section */}
            <section className="design-merced__prompt">
                <div className="design-merced__prompt__title">The UI/UX Prompt</div>
                <section className="design-merced__prompt__content">
                    <article className="design-merced__prompt__content__description">
                        <p className="design-merced__prompt__content__description__text">
                            We want teams/individuals to design an application from the ground up of your dream app that
                            involves connectivity. Since quarantine started, there was a loss of physical contact and a
                            needed push toward fostering online connections. This UI/UX design app can include enriching
                            peoples’ relationships, team collaboration/productivity, or devices finding new ways to
                            connect. No programming necessary.
                        </p>
                    </article>
                    <img className="design-merced__prompt__content__logo" src={PROMPT_ICON} alt="Lightbulb Icon" />
                </section>
            </section>
            {/* FAQ Section */}
            <section className="design-merced__faq">
                <h2 className="design-merced__faq__title">Frequently Asked Questions</h2>
                <Accordian data={FAQData} />
            </section>
            {/* Schedule Section */}
            <section className="design-merced__schedule">
                <article className="design-merced__schedule__article">
                    <div className="design-merced__schedule__article__container">
                        <div className="design-merced__schedule__article__container__calendar">
                            <div className="design-merced__schedule__article__container__calendar__header">
                                <div className="design-merced__schedule__article__container__calendar__header__title">
                                    Schedule
                                </div>
                                <div className="side-by-side">
                                    <p
                                        className="design-merced__schedule__article__container__calendar__subheader"
                                        onClick={(): void => setDay(21)}
                                    >
                                        November 21
                                    </p>
                                    <p
                                        className="design-merced__schedule__article__container__calendar__subheader"
                                        onClick={(): void => setDay(22)}
                                    >
                                        November 22
                                    </p>
                                </div>
                            </div>
                            {generateSchedule()}
                        </div>
                    </div>
                </article>
            </section>
            {/* Sponsors Section */}
            <section className="design-merced__sponsors">
                <img src={SPONSOR_DESIGN} width="100%" alt="Our Sponsors for DesignMerced" />
            </section>
            <Footer backgroundColor="#0d0721" textColor="#EEEBF5" fontColor="#EEEBF5" />
        </main>
    );
};

export default DesignMerced;
