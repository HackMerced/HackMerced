import React, { FC } from 'react';

import './schedule-design.scss';

const ScheduleDesign: FC = (): JSX.Element => {
    return (
        <main className="ScheduleDesign">
            <h1>Schedule</h1>
            <section className="schedule-designathon">
                <article className="calendar-designmerced">
                    <div className="container-designmerced">
                        <div className="calendar">
                            <div className="calendar_header">
                                <h1 className="header_title">DesignMerced</h1>
                                <p className="calendar_subheader">Designathon 2020</p>
                            </div>

                            {/* <div className="calendar_plan">
                                <div className="day_title">Σήμερα</div>
                                <div className="day_body">Opening Ceremony</div>
                                <div className="day_add">
                                    <span className="plus_sign"></span>
                                </div>
                            </div> */}

                            <div className="calendar_events">
                                <p className="calendar_events_title">November 21, 2020</p>

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
