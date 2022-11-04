import React, { FC, useEffect, useState } from "react";

import "./styles.scss";

const Live: FC<{ time: string }> = ({ time }): JSX.Element => {
    const [day, setDay] = useState<string>("00");
    const [hour, setHour] = useState<string>("00");
    const [minute, setMinute] = useState<string>("00");
    const [second, setSecond] = useState<string>("00");

    useEffect(() => {
        const countDownTimer = () => {
            const end = new Date(time);
            const endTime = Date.parse(String(end)) / 1000;
            const current = new Date();
            const currentTime = Date.parse(String(current)) / 1000;
            const timer = endTime - currentTime;

            if (timer < 0) {
                setDay("00");
                setHour("00");
                setMinute("00");
                setSecond("00");
            } else {
                const dd = Math.floor(timer / 86400);
                const hh = Math.floor((timer - dd * 86400) / 3600);
                const mm = Math.floor((timer - dd * 86400 - hh * 3600) / 60);
                const ss = Math.floor(timer - dd * 86400 - hh * 3600 - mm * 60);

                setDay(String(dd));
                setHour(hh < 10 ? "0" + String(hh) : String(hh));
                setMinute(mm < 10 ? "0" + String(mm) : String(mm));
                setSecond(ss < 10 ? "0" + String(ss) : String(ss));
            }
        };

        setInterval(function () {
            countDownTimer();
        }, 1000);
        // !The below eslint rule may show as not a rule but it is a rule
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <b>Countdown till Hacking Ends!</b> HackMerced VII takes place for 36-hours on Discord from March 4-6, 2022. Our
                    main three tracks are education, open innovation, and cybersecurity. This event is completely
                    virtual.
                </p>
            </div>
            <div className="dashboard__content__live__resources">
                <div className="orange-rectangle"></div>
                <h1 className="dashboard__content__live__resources__header">Resources</h1>
                <ul className="dashboard__content__live__resources__ul">
                <a href="https://createdmary.notion.site/The-Official-HackMerced-Hacker-Survival-Guide-7cd612bd3c3c4cdfb27b8f2535560ee2" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li"> Hacker's Guide</li>
                    </a>
                    <a href="https://hackmerced-vii.devpost.com/" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://lob.notion.site/Welcome-UC-Merced-Hackers-7d51dd5f5f414c9e9316c780c297a07f" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Lob</li>
                    </a>
                    <a
                        href="https://startupstash.com/cybersecurity-resources/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">CyberSecurity Beginner</li>
                    </a>
                    <a
                        href="https://github.com/GoogleCloudPlatform/hackathon-toolkit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Google Cloud Toolkit</li>
                    </a>
                    <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Intro to React.js Tutorial</li>
                    </a>
                    <a href="https://ggiande.notion.site/Workshop-NextJS-262fc584de234d22becf0b45f64543fc" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">Next.js Workshop</li>
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
                    <a
                        href="https://www.notion.so/createdmary/How-to-Edit-and-Submit-Video-d36031b34f0748668a3492d846c61042"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <li className="dashboard__content__live__resources__ul__li">How to Edit and Submit Video</li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Live;
