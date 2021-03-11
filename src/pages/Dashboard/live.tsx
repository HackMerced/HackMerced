import React, { FC, useEffect, useState } from "react";

import "./styles.scss";

const Live: FC<{ time: string }> = ({ time }): JSX.Element => {
    const [day, setDay] = useState<string>("00");
    const [hour, setHour] = useState<string>("00");
    const [minute, setMinute] = useState<string>("00");
    const [second, setSecond] = useState<string>("00");

    const countDownTimer = () => {
        const end = new Date(time);
        const endTime = Date.parse(String(end)) / 1000;
        const current = new Date();
        const currentTime = Date.parse(String(current)) / 1000;
        const timer = endTime - currentTime;
        const dd = Math.floor(timer / 86400);
        const hh = Math.floor((timer - dd * 86400) / 3600);
        const mm = Math.floor((timer - dd * 86400 - hh * 3600) / 60);
        const ss = Math.floor(timer - dd * 86400 - hh * 3600 - mm * 60);

        setDay(String(dd));
        setHour(hh < 10 ? "0" + String(hh) : String(hh));
        setMinute(mm < 10 ? "0" + String(mm) : String(mm));
        setSecond(ss < 10 ? "0" + String(ss) : String(ss));
    };

    useEffect(() => {
        setInterval(function() {
            countDownTimer();
        }, 1000);
    }, []);

    return (
        <div className="dashboard__content__live">
            <div className="dashboard__content__live__countdown">
                <div className="orange-rectangle"></div>
                <h1 className="dashboard__content__live__countdown__header">Countdown</h1>
                <div className="dashboard__content__live__countdown__timer">
                    <div className="dashboard__content__live__countdown__timer__digits">
                        {day} <span>Days</span>
                    </div>
                    <div className="dashboard__content__live__countdown__timer__digits">
                        {hour} <span>Hours</span>
                    </div>
                    <div className="dashboard__content__live__countdown__timer__digits">
                        {minute} <span>Minutes</span>
                    </div>
                    <div className="dashboard__content__live__countdown__timer__digits">
                        {second} <span>Seconds</span>
                    </div>
                </div>
                <p className="dashboard__content__live__countdown__body">
                    <b>HackMerced VI</b> occurs on March 12th through the 14th of 2021. This year is the first time
                    we are doing a Hub website. We will want to hear a feedback of the new site from you soon.
                </p>
            </div>
            <div className="dashboard__content__live__resources">
                <div className="orange-rectangle"></div>
                <h1 className="dashboard__content__live__resources__header">Resources</h1>
                <ul className="dashboard__content__live__resources__ul">
                    <a href="https://hackmerced-vi.devpost.com/" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li"> Devpost</li>
                    </a>
                    <a href="https://hack.mlh.io/software/" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li"> MLH Software</li>
                    </a>
                    <a href="https://hack.mlh.io/hardware/" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">MLH Hardware</li>
                    </a>
                    <a href="https://designresourc.es" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">UI/UX</li>
                    </a>
                    <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">GitHub Student Pack</li>
                    </a>
                    <a href="https://startupstash.com/cybersecurity-resources/" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">CyberSecurity Beginner</li>
                    </a>
                    <a href="https://github.com/GoogleCloudPlatform/hackathon-toolkit" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Google Cloud Toolkit</li>
                    </a>
                    <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Intro to React.js Tutorial</li>
                    </a>
                    <a href="https://flutter.dev/docs/get-started/install" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Getting Started with Flutter</li>
                    </a>
                    <a href="https://nodejs.dev/learn" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Node.js Tutorial</li>
                    </a>
                    <a href="https://www.tensorflow.org/tutorials" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Machine Learning Tutorials</li>
                    </a>
                    <a href="https://medium.com/augmented-reality-tutorial" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Augmented Reality</li>
                    </a>
                    <a href="https://www.notion.so/createdmary/How-to-Edit-and-Submit-Video-d36031b34f0748668a3492d846c61042" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">How to Edit and Submit Video</li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Live;
