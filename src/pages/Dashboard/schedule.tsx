import React, { FC, useState } from "react";

import "./styles.scss";
import useWindowDimensions from "../../components/WindowDimensions";

const data: Array<{ day: number; title: string; body: string }> = [
    {
        day: 5,
        title: "8:00 PM - 9:00 PM",
        body: "Opening Ceremony",
    },
    {
        day: 5,
        title: "9:00 PM",
        body: "Hacking Begins",
    },
    {
        day: 5,
        title: "9:00 PM - 10:00 PM",
        body: "Team Formation",
    },
    {
        day: 5,
        title: "10:00 PM - 11:00 PM",
        body: "Brainstorming Activity",
    },
    {
        day: 5,
        title: "11:00 PM - 12:00 PM",
        body: "Notion Workshop",
    },
    {
        day: 5,
        title: "11:00 PM - 12:00 PM",
        body: "GitKraken Workshop",
    },
    {
        day: 6,
        title: "12:00 AM - 1:00 AM",
        body: "GoDot Beginner Workshop",
    },
    {
        day: 6,
        title: "1:00 AM - 2:00 AM",
        body: "Machine Learning Workshop",
    },
    {
        day: 6,
        title: "3:00 AM - 4:00 AM",
        body: "Marble Racing",
    },
    {
        day: 6,
        title: "5:00 AM - 6:00 AM",
        body: "Among Us",
    },
    {
        day: 6,
        title: "8:00 AM - 9:00 AM",
        body: "Build Your Own Website Workshop",
    },
    {
        day: 6,
        title: "9:00 AM - 10:00 AM",
        body: "Project Management Panel",
    },
    {
        day: 6,
        title: "10:00 AM - 11:00 AM",
        body: "UI/UX Panel",
    },
    {
        day: 6,
        title: "11:00 AM - 12:00 PM",
        body: "Cloud Database Panel",
    },
    {
        day: 6,
        title: "12:00 PM - 1:00 PM",
        body: "CyberSecurity Panel",
    },
    {
        day: 6,
        title: "3:00 PM - 4:00 PM",
        body: "CyberSecurity Activity",
    },
    {
        day: 6,
        title: "4:00 PM - 5:00 PM",
        body: "React Native Workshop",
    },
    {
        day: 6,
        title: "4:00 PM - 6:00 PM",
        body: "Minecraft Activity",
    },
    {
        day: 6,
        title: "6:00 PM - 7:00 PM",
        body: "Flask Workshop",
    },
    {
        day: 6,
        title: "7:00 PM - 8:00 PM",
        body: "Bob Ross Painting Activity",
    },
    {
        day: 6,
        title: "8:00 PM - 9:00 PM",
        body: "Figma Workshop",
    },
    {
        day: 6,
        title: "10:00 PM - 11:00 PM",
        body: "Arduino Workshop",
    },
    {
        day: 7,
        title: "12:00 AM - 1:00 AM",
        body: "Scribble.io",
    },
    {
        day: 7,
        title: "9:00 AM",
        body: "Hacking Ends",
    },
    {
        day: 7,
        title: "9:00 AM - 11:00 AM",
        body: "Create your submission video",
    },
    {
        day: 7,
        title: "11:00 AM",
        body: "Submit Devpost and Video presentation",
    },
    {
        day: 7,
        title: "11:00 AM - 1:00 PM",
        body: "Judging",
    },
    {
        day: 7,
        title: "1:00 PM",
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
                <h1 className="dashboard__content__schedule__header__title">Schedule</h1>
                <ul className="dashboard__content__schedule__header__sub-header">
                    <li className="dashboard__content__schedule__header__sub-header__li">
                        <div
                            className="dashboard__content__schedule__header__sub-header__li__title"
                            onClick={(): void => setDay(5)}
                        >
                            {width > 800 ? (
                                <span>Friday, March 12</span>
                            ) : (
                                <span>
                                    Friday, <br /> March 12
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
                                <span>Saturday, March 13</span>
                            ) : (
                                <span>
                                    Saturday, <br /> March 13
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
                                <span>Sunday, March 14</span>
                            ) : (
                                <span>
                                    Sunday, <br /> March 14
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
