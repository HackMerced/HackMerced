import React, { FC, useState } from "react";

import "./styles.scss";
import { schedule } from "./schedule";

const ScheduleDesign: FC = (): JSX.Element => {
    const [day, setDay] = useState(3);

    const generateSchedule = (): JSX.Element => {
        const scheduleElements: Array<JSX.Element> = [];

        schedule.forEach((e: { day: number; title: string; body: string }) => {
            if (e.day === day) {
                scheduleElements.push(
                    <div className="event_item">
                        <div className="event_item_dot dot_active"></div>
                        <div className="event_item_title">{e.title}</div>
                        <div className="event_item_body">{e.body}</div>
                    </div>,
                );
            }
        });

        return <div className="calendar_events">{scheduleElements}</div>;
    };

    return (
        <div className="calendar">
            <div className="calendar_header">
                <h1>Upcoming Events</h1>
                <div className="side-by-side">
                    <div className="calendar_subheader" onClick={(): void => setDay(3)}>
                        Friday, March 5
                    </div>
                    <div className="calendar_subheader" onClick={(): void => setDay(4)}>
                        Saturday, March 6
                    </div>
                    <div className="calendar_subheader" onClick={(): void => setDay(5)}>
                        Sunday, March 7
                    </div>
                </div>
            </div>
            {generateSchedule()}
        </div>
    );
};

export default ScheduleDesign;
