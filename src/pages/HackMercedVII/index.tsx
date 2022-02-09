import React, { FC, useEffect, useState } from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";

import SPONSORS from "../../assets/images/sponsors-hackmercedvii.png";

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
                <p>{faq.content}</p>
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
            {/* <section className="hackmerced-vii__themes">
                <h1 className="hackmerced-vii__themes__title">Tracks</h1>
                <div className="hackmerced-vii__themes__container">
                    <div className="track-one track">
                        <h2>Education</h2>
                        <p>
                            Online school learning has become more active now than ever before. Game-based learning is
                            one teaching strategy that’s growing increasingly popular to help students achieve their
                            learning objectives. Light the future and create an engaging game that helps students
                            support and increase their understanding of course content and active participation in
                            class.
                        </p>
                    </div>
                    <div className="track-two track">
                        <h2>Health</h2>
                        <p>
                            Due to COVID and its variants, mental and physical health has been in continuous decline
                            since quarantine started for the past years. Light the future and create a mobile
                            application to help others communicate with professionals at ease, track their health, or
                            monitor their nutrition.
                        </p>
                    </div>
                    <div className="track-three track">
                        <h2>Privacy Awareness</h2>
                        <p>
                            Getting online can make our lives a lot easier, but also comes with many risks such as scams
                            and fraud. Online scams have become so intricate that viruses have been hidden in pop-up
                            advertisements or other forms of click bait. Light the future and help create an application
                            or extension to help others detect and block unidentified scams to keep them and their loved
                            ones safe virtually.
                        </p>
                    </div>
                </div>
            </section> */}
            {/* FAQ Section */}
            <section className="hackmerced-vii__faq">
                <h2 className="hackmerced-vii__faq__title">Frequently Asked Questions</h2>
                <div className="hackmerced-vii__faq__content">{generateFAQ}</div>
            </section>
            {/* Sponsors Section */}
            <section className="hackmerced-vii__sponsors">
                <div>
                    <h2 className="hackmerced-vii__sponsors__title">Sponsors</h2>
                    <img src={SPONSORS} width="100%" alt="Our Sponsors for HackMerced VI" />
                </div>
            </section>
            <Footer backgroundColor="#383030" textColor="#FFFFF" fontColor="#EEEBF5" />
        </main>
    );
};

export default HackMercedVII;
