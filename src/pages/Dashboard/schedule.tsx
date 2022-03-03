import React, { FC, useState } from "react";

import "./styles.scss";
import useWindowDimensions from "../../components/WindowDimensions";

const data: Array<{ day: number; title: string; body: string }> = [
    {
        day: 5,
        title: "8:00 PM - 9:00 PM PST",
        body: "Opening Ceremony",
    },
    {
        day: 5,
        title: "9:00 PM PST",
        body: "Hacking Begins",
    },
    {
        day: 5,
        title: "9:00 PM - 10:00 PM PST",
        body: "Team Formation Activity",
    },
    {
        day: 5,
        title: "10:00 PM - 11:00 PM PST",
        body: "Brainstorming Activity",
    },
    {
        day: 5,
        title: "11:00 PM - 12:00 PM PST",
        body: "Deep Learning Workshop with LLNL",
    },
    {
        day: 5,
        title: "12:00 PM - 1:00 AM PST",
        body: "Networking and Coffee Chat - Discord",
    },
    {
        day: 6,
        title: "1:00 AM - 2:00 AM PST",
        body: "UI/UX Design Workshop",
    },
    {
        day: 6,
        title: "2:00 AM - 3:00 AM PST",
        body: "Among Us",
    },
    {
        day: 6,
        title: "4:00 AM - 5:00 AM PST",
        body: "Jackbox",
    },
    {
        day: 6,
        title: "5:00 AM - 6:00 AM PST",
        body: "Valorant",
    },
    {
        day: 6,
        title: "8:00 AM - 9:00 AM PST",
        body: "Beginners' Guide to Hackathons",
    },
    {
        day: 6,
        title: "9:00 AM - 10:00 AM PST",
        body: "Project Management Workshop",
    },
    {
        day: 6,
        title: "11:00 AM - 12:00 PM PST",
        body: "Cloud Database Workshop",
    },
    {
        day: 6,
        title: "12:00 AM - 1:00 PM PST",
        body: "Next.js Workshop",
    },
    {
        day: 6,
        title: "1:00 PM - 3:00 PM PST",
        body: "Company Sponsor Career Fair",
    },
    {
        day: 6,
        title: "3:00 PM - 4:00 PM PST",
        body: "Intro to AI and ML Workshop",
    },
    // {
    //     day: 6,
    //     title: "4:00 PM - 5:00 PM PST",
    //     body: "Intro to AI and ML Workshop",
    // },
    {
        day: 6,
        title: "5:00 PM - 6:00 PM PST",
        body: "Bob Ross Activity with MLH",
    },
    {
        day: 6,
        title: "6:00 PM - 7:00 PM PST",
        body: "Professional Development Workshop",
    },
    {
        day: 6,
        title: "7:00 PM - 11:00 PM PST",
        body: "Brain Breaks / Movie Night",
    },
    {
        day: 6,
        title: "11:00 PM - 12:00 AM PST",
        body: "Roblox",
    },
    {
        day: 6,
        title: "2:00 AM - 3:00 PM PST",
        body: "Skribbl.io",
    },
    {
        day: 6,
        title: "3:00 AM - 4:00 AM PST",
        body: "Gartic Phone",
    },
    {
        day: 6,
        title: "6:00 AM - 7:00 AM PST",
        body: "How to Pitch and Download your Projects?",
    },
    {
        day: 7,
        title: "9:00 AM PST",
        body: "Hacking Ends",
    },
    {
        day: 7,
        title: "10:00 AM PST",
        body: "Hard Deadline for Project Submissions",
    },
    {
        day: 7,
        title: "10:00 AM - 1:00 PM PST",
        body: "Judging",
    },
    {
        day: 7,
        title: "10:00 AM - 1:00 PM PST",
        body: "Hacker Hour",
    },
    {
        day: 7,
        title: "1:00 PM PST",
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
                                <span>Friday, March 4</span>
                            ) : (
                                <span>
                                    Friday, <br /> March 4
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
                                <span>Saturday, March 5</span>
                            ) : (
                                <span>
                                    Saturday, <br /> March 5
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
                                <span>Sunday, March 6</span>
                            ) : (
                                <span>
                                    Sunday, <br /> March 6
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
