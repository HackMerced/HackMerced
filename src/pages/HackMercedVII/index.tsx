import React, { FC, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";

import SPONSORS from "../../assets/images/sponsor-hackmercedvii.png";
import STICKER_MULE from "../../assets/images/sticker-mule-logo-dark.png";

import { FAQData } from "../../assets/faq";

import "./styles.scss";

type AccordianItemState = { title: string; content: string; open: boolean };
type AccordianState = Array<{ title: string; content: string; open: boolean }>;

const HackMercedVII: FC = (): JSX.Element => {
    const { width, height } = useWindowDimensions();
    const [accordionItems, setAccordionItems] = useState<AccordianState>([]);

    let backgroundHeight = height > 600 ? height / 2 : 400;
    backgroundHeight = width > 800 ? height + height / 3 - 50 : backgroundHeight;

    // parse the incoming data prior to rendering the component
    useEffect(() => {
        const parseData: () => void = (): void => {
            const accordion: AccordianState = [];

            FAQData.forEach((i: { title: string; content: string }) => {
                accordion.push({
                    title: i.title,
                    content: i.content,
                    open: false,
                });
            });

            setAccordionItems(accordion);
        };

        parseData();
        // !The below eslint rule may show as not a rule but it is a rule
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handles on click events
    const click: (i: AccordianItemState) => void = (i: AccordianItemState): void => {
        const newAccordion: AccordianState = accordionItems.slice();
        const index: number = newAccordion.indexOf(i);

        newAccordion[index].open = !newAccordion[index].open;
        setAccordionItems(newAccordion);
    };

    const generateFAQ: JSX.Element[] = accordionItems.map((faq, idx) => (
        <div className="question" key={idx}>
            <button type="button" className="question__title" onClick={click.bind(null, faq)}>
                {faq.title}
            </button>
            <div className={faq.open ? "question__answer display-question" : "question__answer"}>
            <p>{ReactHtmlParser(faq.content)}</p>
            </div>
        </div>
    ));

    return (
        <main className="hackmerced-vii">
            <Navbar
                backgroundColor="#1A0F21"
                textColor="#FFFFF"
                breakLineColor="#C4BDDC"
                showBanner={true}
                showDLToggle={false}
            />
            {/* Landing Header */}
            <section className="hackmerced-vii__landing" style={{ width: width, height: backgroundHeight }}>
                <div className="hackmerced-vii__landing__container">
                    <div className="hackmerced-vii__landing__container__title">HackMerced VII</div>
                    <div className="hackmerced-vii__landing__container__date">March 4-6, 2022</div>
                    <div className="hackmerced-vii__landing__container__location">Virtual Event</div>
                    <button
                        className="hackmerced-vii__landing__container__button"
                        onClick={() => {
                            window.location.href = "https://hackmerced2022.typeform.com/hackmercedvii";
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
                        <h2>Education</h2>
                        <p>
                            Online school learning and student engagement is now needed than ever. Light the future and build an innovative solution that helps students
                            support online education and connect students together.
                        </p>
                    </div>
                    
                    <div className="track-two track">
                        <h2>Open Innovation</h2>
                        <p>
                            Light the Future and develop an innovative track where hackers can come up with their own ideas, and make awesome innovative projects based on a problem they can think of :D Sky is the limit!
                        </p>
                    </div>
                    <div className="track-three track">
                        <h2>Cybersecurity</h2>
                        <p>
                            Getting online can make our lives a lot easier, but also comes with many risks. Light the future and build an innovation solution to help others detect and block unidentified security risks to keep them and their loved
                            ones safe virtually.
                        </p>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="hackmerced-vii__faq">
                <h2 className="hackmerced-vii__faq__title">Frequently Asked Questions</h2>
                <div className="hackmerced-vii__faq__content">{generateFAQ}</div>
            </section>
            {/* Testing Component */}
            {/* Prizes Section */}
            {/* <section className="hackmerced-vii__prizes">
                <h2 className="hackmerced-vii__prizes__title">Prizes</h2>
                <div className="hackmerced-vii__prizes__content">
                    <Prizes />
                </div>
            </section> */}
            {/* Sponsors Section */}
            <section className="hackmerced-vii__sponsors">
                <div>
                    <h2 className="hackmerced-vii__sponsors__title">Sponsors</h2>
                    <img src={SPONSORS} width="100%" alt="Our Sponsors for HackMerced VI" />
                    <a className="sticker_mule" href="http://hackp.ac/mlh-stickermule-hackathons">
                        <img className="sticker_mule__img" src={STICKER_MULE} alt="sticker mule logo" />
                    </a>
                </div>
            </section>
            <Footer backgroundColor="#383030" textColor="#FFFFF" fontColor="#EEEBF5" />
        </main>
    );
};

export default HackMercedVII;
