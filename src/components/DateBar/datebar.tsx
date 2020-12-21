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
                <div className="header_title">Upcoming Events</div>
                <div className="side-by-side">
                    <p className="calendar_subheader" onClick={() => setDay(3)}>
                        Saturday, March 3
                    </p>
                    <p className="calendar_subheader" onClick={() => setDay(4)}>
                        Sunday, March 4
                    </p>
                    <p className="calendar_subheader" onClick={() => setDay(5)}>
                        Monday, March 5
                    </p>
                </div>
            </div>

            <div className="calendar_events">{generateSchedule()}</div>
        </div>
    );
};

export default ScheduleDesign;
