import React, { FC, useState } from 'react';

import './datebar.scss';
import { schedule } from './schedule';

const ScheduleDesign: FC = (): JSX.Element => {
    const [day, setDay] = useState(3);

    const generateSchedule = (): any => {
        let scheduleElements: any = [];

        schedule[day].forEach((e: any) =>
            scheduleElements.push(
                <div className="event_item">
                    <div className="event_item_dot dot_active"></div>
                    <div className="event_item_title">{e.title}</div>
                    <div className="event_item_body">{e.body}</div>
                </div>,
            ),
        );

        return scheduleElements;
    };

    return (
        <div className="calendar">
            <div className="calendar_header">
        <h1>Upcoming Events</h1>
                <div className="side-by-side">
                    <div className="calendar_subheader" onClick={() => setDay(3)}>
                       Friday , March 3
                    </div>
                    <div className="calendar_subheader" onClick={() => setDay(4)}>
                    Saturday, March 4
                    </div>
                    <div className="calendar_subheader" onClick={() => setDay(5)}>
                    Sunday, March 5
                    </div>
                </div>
            </div>

            <div className="calendar_events">{generateSchedule()}</div>
        </div>
    );
};

export default ScheduleDesign;
