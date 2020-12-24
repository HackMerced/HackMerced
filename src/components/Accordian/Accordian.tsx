import React, { FC, useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

import './Accordian.scss';

type AccordianProps = { data: Array<{ title: string; content: string }> };
type AccordianItemState = { title: string; content: string; open: boolean };
type AccordianState = Array<{ title: string; content: string; open: boolean }>;

const Accordian: FC<AccordianProps> = ({ data }) => {
    const [accordionItems, setAccodionItems] = useState<AccordianState>([]);

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

    const click: (i: AccordianItemState) => void = (i: AccordianItemState): void => {
        const newAccordion: AccordianState = accordionItems.slice();
        const index: number = newAccordion.indexOf(i);

        newAccordion[index].open = !newAccordion[index].open;
        setAccodionItems(newAccordion);
    };

    const sections: JSX.Element[] = accordionItems.map(i => (
        <div className="accordion__item" key={accordionItems.indexOf(i)}>
            <div className="accordion__item__title" onClick={click.bind(null, i)}>
                <div className="accordion__item__title__arrow-wrapper">
                    <i className={i.open ? 'fa fa-angle-down fa-rotate-180' : 'fa fa-angle-down'}></i>
                </div>
                <span className="accordion__item__title__title-text">{i.title}</span>
            </div>
            <div
                className={
                    i.open ? 'accordion__item__content accordion__item__content-open' : 'accordion__item__content'
                }
            >
                <div
                    className={
                        i.open
                            ? 'accordion__item__content__content-text accordion__item__content__content-text-open'
                            : 'accordion__item__content__content-text'
                    }
                >
                    {ReactHtmlParser(i.content)}
                </div>
            </div>
        </div>
    ));

    return <div className="accordion">{sections}</div>;
};

export default Accordian;
