import React, { FC, useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

import "./styles.scss";

type AccordianProps = { data: Array<{ title: string; content: string }> };
type AccordianItemState = { title: string; content: string; open: boolean };
type AccordianState = Array<{ title: string; content: string; open: boolean }>;

const Accordian: FC<AccordianProps> = ({ data }) => {
    const [accordionItems, setAccodionItems] = useState<AccordianState>([]);

    // parse the incoming data prior to rendering the component
    useEffect(() => {
        const parseData: () => void = (): void => {
            const accordion: AccordianState = [];

            data.forEach((i: { title: string; content: string }) => {
                accordion.push({
                    title: i.title,
                    content: i.content,
                    open: false,
                });
            });

            setAccodionItems(accordion);
        };

        parseData();
    }, []);

    // Handles on click events
    const click: (i: AccordianItemState) => void = (i: AccordianItemState): void => {
        const newAccordion: AccordianState = accordionItems.slice();
        const index: number = newAccordion.indexOf(i);

        newAccordion[index].open = !newAccordion[index].open;
        setAccodionItems(newAccordion);
    };

    // Generates each section
    const sections: JSX.Element[] = accordionItems.map((i) => (
        <div className="accordion__item" key={accordionItems.indexOf(i)}>
            <div className="accordion__item__title" onClick={click.bind(null, i)}>
                <div className="accordion__item__title__arrow-wrapper">
                    <i className={i.open ? "CLOSE_ARROW" : "OPEN_ARROW"}></i>
                </div>
                <span className="accordion__item__title__title-text">{i.title}</span>
            </div>
            <div className={i.open ? "accordion__item__content accordion__item__content-open" : "accordion__item__content"}>
                <div className={
                    i.open
                        ? "accordion__item__content__content-text accordion__item__content__content-text-open"
                        : "accordion__item__content__content-text"
                }
                >
                    {ReactHtmlParser(i.content)}
                </div>
            </div>
            <hr className="blue-line"></hr>
        </div>
    ));

    return <div className="accordion">{sections}</div>;
};

export default Accordian;
