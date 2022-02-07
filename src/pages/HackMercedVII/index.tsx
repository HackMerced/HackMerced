import React, { FC } from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";

import SPONSORS from "../../assets/images/sponsors-hackmercedvi.png";

import { FAQData } from "../../assets/faq";

import "./styles.scss";

const HackMercedVII: FC = (): JSX.Element => {
    const { width, height } = useWindowDimensions();

    let backgroundHeight = height > 600 ? height / 2 : 400;
    backgroundHeight = width > 800 ? height + height / 3 - 50 : backgroundHeight;

    const dropdown = () => {};

    const generateFAQ = (): JSX.Element => {
        let list: Array<JSX.Element> = [];

        FAQData.map((faq) => {
            let question = (
                <div className="question" onClick={dropdown}>
                    <button type="button" className="question__title">
                        {faq.title}
                    </button>
                    <div className="question__answer">
                        <p>{faq.content}</p>
                    </div>
                </div>
            );

            list.push(question);
        });

        return <div className="hackmerced-vii__faq__content">{list}</div>;
    };

    return (
        <main className="hackmerced-vii">
            <Navbar backgroundColor="#0C2136" textColor="#FFFFF" breakLineColor="#C4BDDC" showBanner={true} />
            {/* Landing Header */}
            <section className="hackmerced-vii__landing" style={{ width: width, height: backgroundHeight }}>
                <div className="hackmerced-vii__landing__container">
                    <div className="hackmerced-vii__landing__container__title">HackMerced VII</div>
                    <div className="hackmerced-vii__landing__container__date">March 4-6, 2022</div>
                    <div className="hackmerced-vii__landing__container__location">University of California, Merced</div>
                    <button
                        className="hackmerced-vii__landing__container__button"
                        onClick={() => {
                            window.location.href = "https://hackmercedvi.typeform.com/to/mY7E1Fug";
                        }}
                    >
                        <h2 className="hackmerced-vii__landing__container__button__title">Register Now!</h2>
                    </button>
                </div>
            </section>
            {/* Themes Section */}
            <section className="hackmerced-vii__themes">
                <h1 className="hackmerced-vii__themes__title">Tracks</h1>
                <div className="hackmerced-vii__themes__container">
                    <div className="track-one track">
                        <h2>Social Good</h2>
                        <p>
                            Social Good also known as common good, focuses on societal problems and potential to offer
                            meaningful solutions. Create a project to bring the world to a more equitable and
                            sustainable path.
                        </p>
                    </div>
                    <div className="track-two track">
                        <h2>Inclusivity</h2>
                        <p>
                            Diversity is an integral part of our history, culture, and identity. Inclusion is the way we
                            treat and perceive all differences. Create a project to accelerate the approach to diversity
                            and inclusion.
                        </p>
                    </div>
                    <div className="track-three track">
                        <h2>Cybersecurity</h2>
                        <p>
                            The substantial use of technology has made it vital to safeguard ourselves from unapproved
                            access. Private information and data are more exposed than before to such unpleasantries.
                            Create a project to enrich a safe digital world.
                        </p>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="hackmerced-vii__faq">
                <h2 className="hackmerced-vii__faq__title">Frequently Asked Questions</h2>
                {generateFAQ()}
            </section>
            {/* Sponsors Section */}
            <section className="hackmerced-vii__sponsors">
                <div>
                    <h2 className="hackmerced-vii__sponsors__title">Sponsors</h2>
                    <img src={SPONSORS} width="100%" alt="Our Sponsors for HackMerced VI" />
                </div>
            </section>
            <Footer backgroundColor="#0C2136" textColor="#FFFFF" fontColor="#EEEBF5" />
        </main>
    );
};

export default HackMercedVII;
