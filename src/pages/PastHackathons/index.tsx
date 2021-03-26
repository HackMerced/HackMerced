import React, { FC, Fragment } from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

import pastHackathonData from "../../assets/pastHackathons";

import "./styles.scss";

type IterationProps = {
    iteration: number;
    stats: {
        hoursOfHacking: number;
        numberOfAttendees: number;
        projectsSubmitted: number;
        amountOfPrizes: number;
        numberOfWorkshops: number;
        numberOfSponsors: number;
    };
    gallery: string[];
};

enum Numerals {
    I = "I",
    IV = "IV",
    V = "V",
    IX = "IX",
    X = "X",
    XL = "XL",
    L = "L",
    XC = "XC",
    C = "C",
    CD = "CD",
    D = "D",
    CM = "CM",
    M = "M",
}

// Converts a number into a roman numeral
const romanize = (num: number) => {
    const lookup: Record<Numerals, number> = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let roman = "",
        i: Numerals;

    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }

    return roman;
};

// Generate a layout with the Successes and the Gallery attached and appends to an array then renders in reverse order
const generateIterations = (data: Array<IterationProps> | any): JSX.Element => {
    const iterationArray: Array<JSX.Element> = data.map((element: IterationProps, index: number) => (
        <Fragment key={index}>
            <section className="past-hackathon__stats">
                <div className="past-hackathon__stats__title">
                    {index === data.length - 1
                        ? `Our Successes`
                        : `HackMerced ${romanize(element.iteration)} Successes`}
                    <br />
                </div>
                <div className="past-hackathon__stats__container">
                    <div className="past-hackathon__stats__container__card">
                        <h1 className="past-hackathon__stats__container__card__value">
                            {element.stats.hoursOfHacking}
                        </h1>
                        <h2 className="past-hackathon__stats__container__card__label">hours of hacking</h2>
                    </div>
                    <div className="past-hackathon__stats__container__card">
                        <h1 className="past-hackathon__stats__container__card__value">
                            {element.stats.numberOfAttendees}+
                        </h1>
                        <h2 className="past-hackathon__stats__container__card__label">attendees</h2>
                    </div>
                    <div className="past-hackathon__stats__container__card">
                        <h1 className="past-hackathon__stats__container__card__value">
                            {element.stats.amountOfPrizes}k+
                        </h1>
                        <h2 className="past-hackathon__stats__container__card__label">amount of prizes</h2>
                    </div>
                    <div className="past-hackathon__stats__container__card">
                        <h1 className="past-hackathon__stats__container__card__value">
                            {element.stats.numberOfWorkshops}
                        </h1>
                        <h2 className="past-hackathon__stats__container__card__label">workshops</h2>
                    </div>
                    <div className="past-hackathon__stats__container__card">
                        <h1 className="past-hackathon__stats__container__card__value">
                            {element.stats.projectsSubmitted}
                        </h1>
                        <h2 className="past-hackathon__stats__container__card__label">projects submitted</h2>
                    </div>
                    <div className="past-hackathon__stats__container__card">
                        <h1 className="past-hackathon__stats__container__card__value">
                            {element.stats.numberOfSponsors}
                        </h1>
                        <h2 className="past-hackathon__stats__container__card__label">sponsors</h2>
                    </div>
                </div>
            </section>
            <section className="past-hackathon__gallery">
                <h1 className="past-hackathon__gallery__title">HackMerced {romanize(element.iteration)} Gallery</h1>
                <div className="past-hackathon__gallery__column">
                    <div className="past-hackathon__gallery__column__row">
                        <img
                            className="past-hackathon__gallery__column__row__cell"
                            src={element.gallery[0]}
                            alt="HackMerced Team"
                        />
                        <img
                            className="past-hackathon__gallery__column__row__cell"
                            src={element.gallery[1]}
                            alt="HackMerced Team"
                        />
                        <img
                            className="past-hackathon__gallery__column__row__cell"
                            src={element.gallery[2]}
                            alt="HackMerced Team"
                        />
                    </div>
                    <div className="past-hackathon__gallery__column__row">
                        <img
                            className="past-hackathon__gallery__column__row__cell"
                            src={element.gallery[3]}
                            alt="HackMerced Team"
                        />
                        <img
                            className="past-hackathon__gallery__column__row__cell"
                            src={element.gallery[4]}
                            alt="HackMerced Team"
                        />
                        <img
                            className="past-hackathon__gallery__column__row__cell"
                            src={element.gallery[5]}
                            alt="HackMerced Team"
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    ));

    return <Fragment>{iterationArray.reverse()}</Fragment>;
};

const PastHackathons: FC = (): JSX.Element => {
    return (
        <main className="past-hackathon">
            <Navbar />
            {generateIterations(pastHackathonData)}
            <Footer />
        </main>
    );
};

export default PastHackathons;
