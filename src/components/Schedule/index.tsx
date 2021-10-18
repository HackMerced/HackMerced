import React, { FC} from "react";

import "./styles.scss";

const Table: FC<{}> = (): JSX.Element => {
    return(
        <>
            <div className="heading">
                <h2 className="heading-text">Schedule</h2>
            </div>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <span className="title">12:30 PM PST</span>
                        <p>Check-in</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">1:00 PM PST</span>
                        <p className="opening" data-tip="Introduction - Hackmerced" style={{ position: 'relative' }}>Opening Ceremony</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <span className="title">1:30-2:30 PM PST</span>
                        <p className="lightChallenge" data-tip="Room - 140" style={{ position: 'relative' }}>Light Challenge</p>
                        <p className="design" data-tip="Room - 130" style={{ position: 'relative' }}>Design Workshop</p>
                        <p className="charades" data-tip="Room - 110" style={{ position: 'relative' }}>Charades</p>
                        <p className="lightChallenge" data-tip="Twitch" style={{ position: 'relative' }}>Marble Race</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">2:30-3:30 PM PST</span>
                        <p className="github" data-tip="Room - 130" style={{ position: 'relative' }}>Code Collab w/ GitHub</p>
                        <p className="games" data-tip="Among Us - online Red light,Green light - Outside Room - 110" style={{ position: 'relative' }}>Among Us, Red light & Green light</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <span className="title">2:30-4:30 PM PST</span>
                        <p className="acm" data-tip="Room - 140" style={{ position: 'relative' }}>Hack the Power collab with SEA and ACM</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">3:30-4:30 PM PST</span>
                        <p className="notion" data-tip="Room - 130" style={{ position: 'relative' }}>Project Management w/ Notion</p>
                        <p className="gartic" data-tip="Garticphone(Online) Karaoke Slideshow Room - 110" style={{ position: 'relative' }}>Garticphone and Karaoke slideshow</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <span className="title">4:30-5:30 PM PST</span>
                        <p className="interview" data-tip="Room - 130" style={{ position: 'relative' }}>Hack the Technical Interview</p>
                        <p className="chalk" data-tip="Outside" style={{ position: 'relative' }}>Chalk competition</p>
                        <p className="typing" data-tip="Online" style={{ position: 'relative' }}>Typing speed race</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <span className="title">5:30-6:30 PM PST</span>
                        <p>Dinner</p>
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
                        <p>Closing Ceremony</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;