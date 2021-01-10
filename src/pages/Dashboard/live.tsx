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
        setInterval(function () {
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
                    <b>HackMerced VI</b> will occur on March 5th through the 7th of 2021. This year is the first time we
                    are doing a Hub website. We will want to hear a feedback of the new site from you soon.
                </p>
            </div>
            <div className="dashboard__content__live__resources">
                <div className="orange-rectangle"></div>
                <h1 className="dashboard__content__live__resources__header">Resources</h1>
                <ul className="dashboard__content__live__resources__ul">
                    <li className="dashboard__content__live__resources__ul__li"> <a href="https://hack.mlh.io/software/">MLH Software</a></li>
                    <li className="dashboard__content__live__resources__ul__li"><a href="https://hack.mlh.io/hardware/">MLH Hardware</a></li>
                    <li className="dashboard__content__live__resources__ul__li"><a href="https://designresourc.es">UI/UX</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Live;
