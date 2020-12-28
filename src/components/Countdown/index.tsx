import React, { FC, useEffect, useState } from "react";

import "./styles.scss";

// function component
const AnimatedCard = ({ animation, digit }: { animation: string; digit: number }): JSX.Element => {
    return (
        <div className={`countdown__flip-clock__flip-unit-container__animated-card ${animation}`}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const StaticCard = ({ position, digit }: { position: string; digit: number }): JSX.Element => {
    return (
        <div className={`countdown__flip-clock__flip-unit-container__static-card ${position}`}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const FlipUnitContainer = ({
    digit,
    shuffle,
    unit,
}: {
    digit: number;
    shuffle: boolean;
    unit: string;
}): JSX.Element => {
    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit - 1;

    // to prevent a negative value
    if (unit !== "hours") {
        previousDigit = previousDigit === -1 ? 59 : previousDigit;
    } else {
        previousDigit = previousDigit === -1 ? 23 : previousDigit;
    }

    // add zero
    if (currentDigit < 10) {
        currentDigit = Number(`0${currentDigit}`);
    }
    if (previousDigit < 10) {
        previousDigit = Number(`0${previousDigit}`);
    }

    // shuffle digits
    const digit1 = shuffle ? previousDigit : currentDigit;
    const digit2 = !shuffle ? previousDigit : currentDigit;

    // shuffle animations
    const animation1 = shuffle ? "fold" : "unfold";
    const animation2 = !shuffle ? "fold" : "unfold";

    return (
        <div className="countdown__flip-clock__flip-unit-container">
            <StaticCard position={"upperCard"} digit={currentDigit} />
            <StaticCard position={"lowerCard"} digit={previousDigit} />
            <AnimatedCard digit={digit1} animation={animation1} />
            <AnimatedCard digit={digit2} animation={animation2} />
        </div>
    );
};

// class component
const Countdown: FC<{ destination: string }> = ({ destination }): JSX.Element => {
    const [timerID, setTimerID] = useState<number>();
    const [clock, setClock] = useState({
        days: 0,
        daysShuffle: true,
        hours: 0,
        hoursShuffle: true,
        minutes: 0,
        minutesShuffle: true,
        seconds: 0,
        secondsShuffle: true,
    });

    const parseDuration = (
        duration: number,
    ): {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    } => {
        let remain = duration;

        const days = Math.floor(remain / (1000 * 60 * 60 * 24));
        remain = remain % (1000 * 60 * 60 * 24);

        const hours = Math.floor(remain / (1000 * 60 * 60));
        remain = remain % (1000 * 60 * 60);

        const minutes = Math.floor(remain / (1000 * 60));
        remain = remain % (1000 * 60);

        const seconds = Math.floor(remain / 1000);
        remain = remain % 1000;

        const milliseconds = remain;

        return {
            days,
            hours,
            minutes,
            seconds,
            milliseconds,
        };
    };

    const formatTime = (
        o: {
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        },
        useMilli = false,
    ) => {
        const parts = [];

        if (o.days) {
            parts.push(o.days + " days");
        }

        if (o.hours) {
            parts.push(o.hours + " hours");
        }

        if (o.minutes) {
            parts.push(o.minutes + " minutes");
        }

        if (o.seconds) {
            parts.push(o.seconds + " seconds");
        }

        if (useMilli && o.milliseconds) {
            parts.push(o.milliseconds + " milliseconds");
        }

        if (parts.length === 0) {
            return "instantly";
        } else {
            return parts.join(" ");
        }
    };

    const formatDuration = (duration: number, useMilli = false): string => {
        const time = parseDuration(duration);
        return formatTime(time, useMilli);
    };

    const updateTime = (): void => {
        // get new date
        const startTime = new Date();
        const endTime = new Date(destination);
        const timeLeft = formatDuration(endTime.getTime() - startTime.getTime()).split(" ");
        const time = new Map(
            Object.entries({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }),
        );

        if (timeLeft.length !== 0) {
            // set time units
            for (let i = 1; i < timeLeft.length - 1; i += 2) {
                time.set(timeLeft[i], Number(timeLeft[i - 1]));
            }
        }

        // on day change, update days and shuffle state
        if (Number(time.get("days")) !== clock.days) {
            setClock({
                ...clock,
                days: Number(time.get("days")),
                daysShuffle: !clock.daysShuffle,
            });
        }
        // on hour change, update hours and shuffle state
        if (Number(time.get("hours")) !== clock.hours) {
            setClock({
                ...clock,
                hours: Number(time.get("hours")),
                hoursShuffle: !clock.hoursShuffle,
            });
        }
        // on minute change, update minutes and shuffle state
        if (Number(time.get("minutes")) !== clock.minutes) {
            setClock({
                ...clock,
                minutes: Number(time.get("minutes")),
                minutesShuffle: !clock.minutesShuffle,
            });
        }
        // on second change, update seconds and shuffle state
        if (Number(time.get("seconds")) !== clock.seconds) {
            setClock({
                ...clock,
                seconds: Number(time.get("seconds")),
                secondsShuffle: !clock.secondsShuffle,
            });
        }
    };

    useEffect(() => {
        setTimerID(setInterval(() => updateTime(), 500));

        return () => {
            clearInterval(timerID);
        };
    }, [clock]);

    return (
        <section className="countdown">
            <div className="countdown__flip-clock">
                <FlipUnitContainer unit={"days"} digit={clock.days} shuffle={clock.daysShuffle} />
                <FlipUnitContainer unit={"hours"} digit={clock.hours} shuffle={clock.hoursShuffle} />
                <FlipUnitContainer unit={"minutes"} digit={clock.minutes} shuffle={clock.minutesShuffle} />
                {/* <FlipUnitContainer unit={"seconds"} digit={clock.seconds} shuffle={clock.secondsShuffle} /> */}
            </div>
        </section>
    );
};

export default Countdown;
