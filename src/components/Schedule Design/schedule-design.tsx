import React, { FC } from 'react';

import './schedule-design.scss';

const ScheduleDesign: FC = (): JSX.Element => {
    return (
        <main className="ScheduleDesign">
            <section className="schedule-designathon">
                <article className="calendar-designmerced">
                    <div className="container-designmerced">
                        <div className="calendar">
                            <div className="calendar_header">
                                <div className="header_title">Schedule</div>
                                <p className="calendar_subheader">November 21, 2020</p>
                            </div>

                            <div className="calendar_events">
                                {/* <p className="calendar_events_title">November 21, 2020</p> */}

                                <div className="event_item">
                                    <div className="event_item_dot dot_active"></div>
                                    <div className="event_item_title">9:30 AM</div>
                                    <div className="event_item_body">Opening Ceremony</div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">12:00 PM</div>
                                    <div className="event_item_body">Bob Ross Activity</div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">9:30 AM</div>
                                    <div className="event_item_body">
                                        Hacking Ends
                                        {/* <span className="contact">Location</span> */}
                                    </div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">10:00 AM</div>
                                    <div className="event_item_body">Judging</div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">12:00 PM</div>
                                    <div className="event_item_body">Closing Ceremony</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default ScheduleDesign;
