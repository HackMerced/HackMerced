import React, { FC, useState } from "react";

import "./styles.scss";
import useWindowDimensions from "../../components/WindowDimensions";

const data: Array<{ day: number; title: string; body: string }> = [
    {
        day: 5,
        title: "9:00 PM - 10:00 PM",
        body: "Opening Ceremony",
    },
    {
        day: 5,
        title: "10:00 PM  - 11:00 PM",
        body: "Hacking Begins",
    },
    {
        day: 5,
        title: "10:00 PM - 11:00 PM",
        body: "Team Formation",
    },
    {
        day: 6,
        title: "12:00 AM - 1:00 AM",
        body: "Lunch Break",
    },
    {
        day: 6,
        title: "1:00 AM - 2:00 AM",
        body: "Brainstorming activity",
    },
    {
        day: 7,
        title: "12:00 AM - 1:00 AM",
        body: "Among Us Game",
    },
    {
        day: 7,
        title: "1:00 AM - 2:00 AM",
        body: "Closing Ceremony",
    },
];

const Schedule: FC = (): JSX.Element => {
    const [day, setDay] = useState<number>(5);
    const { width } = useWindowDimensions();

    const BreakLine = (): JSX.Element => {
        return <div className="break-line"></div>;
    };

    const generateSchedule = (): JSX.Element => {
        const scheduleElements: Array<JSX.Element> = [];

        data.forEach((e: { day: number; title: string; body: string }, idx: number) => {
            if (e.day === day) {
                scheduleElements.push(
                    <div className="dashboard__content__schedule__timeline__item" key={idx}>
                        <div className="dashboard__content__schedule__timeline__item__title">{e.title}</div>
                        <div className="dashboard__content__schedule__timeline__item__body">{e.body}</div>
                    </div>,
                );
            }
        });

        return <div className="dashboard__content__schedule__timeline">{scheduleElements}</div>;
    };

    return (
        <div className="dashboard__content__schedule">
            <div className="orange-rectangle"></div>
            <div className="dashboard__content__schedule__header">
                <h1 className="dashboard__content__schedule__header__title">Upcoming Events</h1>
                <ul className="dashboard__content__schedule__header__sub-header">
                    <li className="dashboard__content__schedule__header__sub-header__li">
                        <div
                            className="dashboard__content__schedule__header__sub-header__li__title"
                            onClick={(): void => setDay(5)}
                        >
                            {width > 800 ? (
                                <span>Friday, March 5</span>
                            ) : (
                                <span>
                                    Friday, <br /> March 5
                                </span>
                            )}
                        </div>
                        {day === 5 ? BreakLine() : null}
                    </li>
                    <li className="dashboard__content__schedule__header__sub-header__li">
                        <div
                            className="dashboard__content__schedule__header__sub-header__li__title"
                            onClick={(): void => setDay(6)}
                        >
                            {width > 800 ? (
                                <span>Saturday, March 6</span>
                            ) : (
                                <span>
                                    Saturday, <br /> March 6
                                </span>
                            )}
                        </div>
                        {day === 6 ? BreakLine() : null}
                    </li>
                    <li className="dashboard__content__schedule__header__sub-header__li">
                        <div
                            className="dashboard__content__schedule__header__sub-header__li__title"
                            onClick={(): void => setDay(7)}
                        >
                            {width > 800 ? (
                                <span>Sunday, March 7</span>
                            ) : (
                                <span>
                                    Sunday, <br /> March 7
                                </span>
                            )}
                        </div>
                        {day === 7 ? BreakLine() : null}
                    </li>
                </ul>
            </div>
            {generateSchedule()}
        </div>
    );
};

export default Schedule;
