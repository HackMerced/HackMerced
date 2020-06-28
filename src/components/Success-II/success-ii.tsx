import React from 'react';

// import PLACEHOLDER from "../../assets/images/placeholder-box.png";

import './success-ii.scss';

const SuccessII: React.FC = () => {
    return (
        <section className="SUCCESS">
            <div className="font-black hackathons-title">
                HackMerced II <br />{' '}
            </div>
            <div className="wrapper clearfix center">
                <div className="card ">
                    <h1>36</h1>
                    <h2>hours of hacking</h2>
                </div>
                <div className="card card2">
                    <h1>400+</h1>
                    <h2>attendees</h2>
                </div>
                <div className="card card3">
                    <h1>33</h1>
                    <h2>projects submitted</h2>
                </div>
            </div>
            <div className="wrapper clearfix center">
                <div className="card card4">
                    <h1>5k+</h1>
                    <h2>amount of prizes</h2>
                </div>
                <div className="card card5">
                    <h1>8</h1>
                    <h2>workshops</h2>
                </div>
                <div className="card card6">
                    <h1>15</h1>
                    <h2>sponsors</h2>
                </div>
            </div>
        </section>
    );
};

export default SuccessII;
