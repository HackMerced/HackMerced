import React, { FC } from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";
import Accordian from "../../components/Accordian";

import SUSTAINABILITY from "../../assets/images/sustainability.png";
import INCLUSIVITY from "../../assets/images/inclusivity.png";
import CYBER_SECURITY from "../../assets/images/cybersecurity.png";
import SPONSORS from "../../assets/images/sponsors-hackmercedvi.png";
import STICKER_MULE from "../../assets/images/sticker-mule-logo-light.png";

import { FAQData } from "../../assets/faq";

import "./styles.scss";

const HackMercedVI: FC = (): JSX.Element => {
    const { width, height } = useWindowDimensions();

    let backgroundHeight = height > 600 ? height / 2 : 400;
    backgroundHeight = width > 800 ? height + height / 3 - 50 : backgroundHeight;

    return (
        <main className="hackmerced-vi">
            <Navbar backgroundColor="#B63F1A" textColor="#FFFFF" breakLineColor="#C4BDDC" showBanner={true} />
            <section className="hackmerced-vi__landing" style={{ width: width, height: backgroundHeight }}>
                <div className="hackmerced-vi__landing__container">
                    <button
                        className="hackmerced-vi__landing__container__button bg-white text-black font-bold"
                        onClick={() => {
                            window.location.href = "https://hackmercedvi.typeform.com/to/mY7E1Fug";
                        }}
                    >
                        <h1 className="hackmerced-vi__landing__container__button__title">
                            Register <br /> Date: March 12-14
                        </h1>
                    </button>
                </div>
            </section>
            <section className="hackmerced-vi__themes">
                <h1 className="hackmerced-vi__themes__title">Themes</h1>
                <div className="hackmerced-vi__themes__container">
                    <div className="track-one">
                        <h2>Social Good</h2>
                        <img
                            className="hackmerced-vi__themes__container__tracks"
                            src={SUSTAINABILITY}
                            alt="Sustainability Track"
                        />
                        <p>
                            Social Good also known as common good, focuses on societal problems and potential to offer
                            meaningful solutions. Create a project to bring the world to a more equitable and
                            sustainable path.
                        </p>
                    </div>
                    <div className="track-two">
                        <h2>Inclusivity</h2>
                        <img
                            className="hackmerced-vi__themes__container__tracks"
                            src={INCLUSIVITY}
                            alt="Inclusivity Track"
                        />
                        <p>
                            Diversity is an integral part of our history, culture, and identity. Inclusion is the way we
                            treat and perceive all differences. Create a project to accelerate the approach to diversity
                            and inclusion.
                        </p>
                    </div>
                    <div className="track-three">
                        <h2>Cybersecurity</h2>
                        <img
                            className="hackmerced-vi__themes__container__tracks"
                            src={CYBER_SECURITY}
                            alt="Cybersecurity Track"
                        />
                        <p>
                            The substantial use of technology has made it vital to safeguard ourselves from unapproved
                            access. Private information and data are more exposed than before to such unpleasantries.
                            Create a project to enrich a safe digital world.
                        </p>
                    </div>
                </div>
            </section>
            <section className="hackmerced-vi__faq">
                <h2 className="hackmerced-vi__faq__title">Frequently Asked Questions</h2>
                <Accordian data={FAQData} />
            </section>
            <section className="hackmerced-vi__sponsors">
                <div>
                    <h2 className="hackmerced-vi__sponsors__title">Sponsors</h2>
                    <img src={SPONSORS} width="100%" alt="Our Sponsors for HackMerced VI" />
                    <a className="sticker_mule" href="http://hackp.ac/mlh-stickermule-hackathons">
                        <img className="sticker_mule__img" src={STICKER_MULE} />
                    </a>
                </div>
            </section>
            <Footer backgroundColor="#B63F1A" textColor="#FFFFF" fontColor="#EEEBF5" />
        </main>
    );
};

export default HackMercedVI;
