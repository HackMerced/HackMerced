import React, { FC } from 'react';

import './Successes.scss';
import { SuccessesProps } from './Successes.types';

const Successes: FC<SuccessesProps> = (props): JSX.Element => {
    const {
        hoursOfHacking,
        numberOfAttendees,
        projectsSubmitted,
        amountOfPrizes,
        numberOfWorkshops,
        numberOfSponsors,
        iteration,
    } = props;

    return (
        <section className="SUCCESS">
            <div className="text-3xl md:text-5xl font-black hackathons-title">
                {iteration === 'V' ? `Our Successes` : `HackMerced ${iteration}`}
                <br />
            </div>
            <div className="wrapper">
                <div className="card w-1/3 h-16">
                    <h1>{hoursOfHacking}</h1>
                    <h2>hours of hacking</h2>
                </div>
                <div className="card w-1/3 h-16">
                    <h1>{numberOfAttendees}+</h1>
                    <h2>attendees</h2>
                </div>
                <div className="card w-1/3 h-16">
                    <h1>{amountOfPrizes}k+</h1>
                    <h2>amount of prizes</h2>
                </div>
                <div className="card w-1/3 h-16">
                    <h1>{numberOfWorkshops}</h1>
                    <h2>workshops</h2>
                </div>
                <div className="card w-1/3 h-16">
                    <h1>{projectsSubmitted}</h1>
                    <h2>projects submitted</h2>
                </div>
                <div className="card w-1/3 h-16">
                    <h1>{numberOfSponsors}</h1>
                    <h2>sponsors</h2>
                </div>
            </div>
        </section>
    );
};

export default Successes;
