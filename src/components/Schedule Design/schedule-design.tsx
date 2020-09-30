import React, { FC } from 'react';

import './schedule-design.scss';

const ScheduleDesign: FC = (): JSX.Element => {
    return (
        <main className="ScheduleDesign">
            <h1>Schedule</h1>
            <section className="schedule-designathon">
                <article className="calendar-designmerced"></article>
            </section>
        </main>
    );
};

export default ScheduleDesign;
