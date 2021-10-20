import React, { FC } from "react";

import "./styles.scss";

const Table: FC<any> = (): JSX.Element => {
    return (
        <>
            <div className="heading">
                <h2 className="heading-text">Schedule</h2>
            </div>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <span className="title">12:30 PM PST</span>
                        <p
                            className="checkin"
                            data-tip="Location: Room 130 (in-person only)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Check-in
                        </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">1:00 PM PST</span>
                        <p
                            className="opening"
                            data-tip="
                            Location: Room 130 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Opening Ceremony
                        </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <span className="title">1:30-2:30 PM PST</span>
                        <p
                            className="lightChallenge"
                            data-tip="Location: Room 140 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Light Challenge
                        </p>
                        <p
                            className="design"
                            data-tip="Location: Room 130 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Design Workshop
                        </p>
                        <p className="lightChallenge" data-tip="Online: Twitch" style={{ position: "relative" }}>
                            Marble Race
                        </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">2:30-3:30 PM PST</span>
                        <p
                            className="github"
                            data-tip="Location: Room 130 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Code Collab w/ GitHub
                        </p>
                        <p className="games" data-tip="Online: Discord" style={{ position: "relative" }}>
                            Among Us
                        </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <span className="title">2:30-4:30 PM PST</span>
                        <p
                            className="acm"
                            data-tip="Location: Room 140 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Hack the Power with SEA & ACM
                        </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">3:30-4:30 PM PST</span>
                        <p
                            className="notion"
                            data-tip="Location: Room 130 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Project Management w/ Notion
                        </p>
                        <p className="gartic" data-tip="Online: Discord" style={{ position: "relative" }}>
                            Garticphone
                        </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <span className="title">4:30-5:30 PM PST</span>
                        <p
                            className="interview"
                            data-tip="Location: Room 130 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Hack the Technical Interview
                        </p>
                        <p className="typing" data-tip="Online: Discord" style={{ position: "relative" }}>
                            Typing speed race
                        </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">5:30-6:30 PM PST</span>
                        <p
                            className="opening"
                            data-tip="Location: Room 130 (in-person only)"
                            style={{ position: "relative" }}
                        >
                            Dinner
                        </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <span className="title">6:30-7:00 PM PST</span>
                        <p>Networking</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">7:00 PM PST</span>
                        <p
                            className="opening"
                            data-tip="Location: Room 130 (in-person)
                            Online: Discord"
                            style={{ position: "relative" }}
                        >
                            Closing Ceremony
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
