import React, { FC, useState } from "react";

import "./styles.scss";
import { schedule } from "./schedule";

const ScheduleDesign: FC = (): JSX.Element => {
    const [day, setDay] = useState(21);

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
        <main className="ScheduleDesign">
            <section className="schedule-designathon">
                <article className="calendar-designmerced">
                    <div className="container-designmerced">
                        <div className="calendar">
                            <div className="calendar_header">
                                <div className="header_title">Schedule</div>
                                <div className="side-by-side">
                                    <p className="calendar_subheader" onClick={(): void => setDay(21)}>
                                        November 21
                                    </p>
                                    <p className="calendar_subheader" onClick={(): void => setDay(22)}>
                                        November 22
                                    </p>
                                </div>
                            </div>
                            {generateSchedule()}
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default ScheduleDesign;
