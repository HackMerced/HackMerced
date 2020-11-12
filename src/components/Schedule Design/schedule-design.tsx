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
                                    <div className="event_item_title">9:00 AM - 10:00 AM</div>
                                    <div className="event_item_body">Opening Ceremony</div>
                                </div>
                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">10:00 AM</div>
                                    <div className="event_item_body">Hacking Starts & <br></br>Team Building Activity </div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">11:00 AM - 12:00 PM</div>
                                    <div className="event_item_body"> Introduction to Adobe Workshop</div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">1:00 PM - 2:00 PM</div>
                                    <div className="event_item_body">
                                        Beginner Figma Workshop
                                        {/* <span className="contact">Location</span> */}
                                    </div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">3:00 PM - 4:00 PM</div>
                                    <div className="event_item_body">Adobe Researching Design</div>
                                </div>

                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">4:00 PM - 5:00 PM</div>
                                    <div className="event_item_body">Minecraft Activity</div>
                                </div>
                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">6:00 PM - 7:00 PM</div>
                                    <div className="event_item_body">Intro to UI/UX and Design Careers</div>
                                </div>
                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">8:00 PM - 9:00 PM</div>
                                    <div className="event_item_body">Beginner Product Design</div>
                                </div>
                                <div className="event_item">
                                    <div className="event_item_dot"></div>
                                    <div className="event_item_title">11:00 PM - 12:00 PM</div>
                                    <div className="event_item_body">How to Prototype/Wireframe</div>
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
