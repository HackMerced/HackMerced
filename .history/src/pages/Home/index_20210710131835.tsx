import React, { FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";

import HACKMERCED_TITLE from "../../assets/images/placeholder-title.png";
import HACKMERCED_TOWER from "../../assets/images/tower.png";
import TEAM_PICTURE from "../../assets/images/hackmerced-v.jpg";
import team from "../../assets/team";
import winners from "../../assets/winners";
import "./styles.scss";

type TeamProps = {
    firstName?: string | undefined;
    lastName?: string | undefined;
    url: string;
    src: string;
    desc: string;
};

type WinnersProps = {
    icon: IconDefinition;
    category: string;
    group: string;
    project: string;
};

// Generate a Hexagon layout for the Pictures of the Organizing Team
const generateTeamPics = (team: Array<TeamProps>): JSX.Element => {
    const teamArray: Array<JSX.Element> = team.map((member: TeamProps, index: number) => (
        <li key={index} className="home__team-pictures__grid__items__item">
            <a
                className="home__team-pictures__grid__items__item__hexagon"
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="home__team-pictures__grid__items__item__hexagon__picture"
                    src={member.src}
                    alt={`${member.firstName} ${member.lastName}`}
                />
                <div className="home__team-pictures__grid__items__item__hexagon__text">
                    {member.desc}
                </div>
            </a>
        </li>
    ));

    return <ul className="home__team-pictures__grid__items">{teamArray}</ul>;
};

// Generate a grid layout of the winners of the previous HackMerced
const generateWinners = (winners: Array<WinnersProps>): JSX.Element => {
    const winnersArray: Array<JSX.Element> = winners.map((winner: WinnersProps, index: number) => (
        <li key={index} className="home__past-winners__list__past-winner">
            <a href={winner.project} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={winner.icon} className="fa home__past-winners__list__past-winner__icon" />
                <h5 className="home__past-winners__list__past-winner__category">{winner.category}</h5>
                <div className="home__past-winners__list__past-winner__group">{winner.group}</div>
            </a>
        </li>
    ));

    return <ul className="home__past-winners__list">{winnersArray}</ul>;
};

// Generate a section heading that follows the same format for each section
const generateSectionHeading = (title: string): JSX.Element => {
    return (
        <Fragment>
            <h1 className="home__section-title">{title}</h1>
            <div className="home__break-line"></div>
        </Fragment>
    );
};

const Home: FC = (): JSX.Element => {
    const { width } = useWindowDimensions();

    return (
        <main className="home">
            <Navbar />
            {/* Landing Section */}
            <section className="home__heading">
                {width > 775 ? (
                    <section className="home__heading__wave">
                        <div className="home__heading__wave__cloud c1"></div>
                        <div className="home__heading__wave__cloud c2"></div>
                        <div className="home__heading__wave__cloud c3"></div>
                        <div className="home__heading__wave__cloud c4"></div>
                        <div className="home__heading__wave__cloud c5"></div>
                    </section>
                ) : null}
                <section className="home__heading__title">
                    <img
                        src={HACKMERCED_TITLE}
                        width="400"
                        height="175"
                        alt="HackMerced Title"
                        className="home__heading__title__img"
                    />
                    <div className="home__heading__title__text">The biggest San Joaquin Valley hackathon.</div>
                    <div className="home__heading__title__sub-text">
                        Stay updated with HackMerced and subscribe to our email list!
                    </div>
                    <form className = "form">
                        <input type="email" id="email" required placeholder="Enter your email" />
                        <button
                            className="subscribe-button"
                            onClick={() => {
                                window.location.href = "https://hackmercedvi.typeform.com/to/GLB4v3b3";
                            }}>
                                Submit
                                </button>

                    </form>
                </section>
                {width > 775 ? (
                    <img
                        src={HACKMERCED_TOWER}
                        width="525"
                        height="1005"
                        alt="HackMerced Tower"
                        className="home__heading__tower"
                    />
                ) : null}
            </section>
            {/* About Us */}
            <section className="home__about-us">
                {generateSectionHeading("About Us")}
                <section className="home__about-us__content">
                    <article className="home__about-us__content__description">
                        <p>
                            HackMerced is a 36 hour annual programming competition that occurs at the University of
                            California, Merced and is open to students from all over the world. During the event,
                            participants will collaborate in teams and attend workshops to learn about new technologies.
                            <br />
                            <br />
                            We aim to create a collaborative, interdisciplinary event that brings together students from
                            all universities and prospective sponsors to see the innovation and creativity culminating
                            within the San Joaquin Valley.
                        </p>
                    </article>
                    <img className="home__about-us__content__team-picture" src={TEAM_PICTURE} alt="HackMerced Team" />
                </section>
            </section>
            {/* Past Winners */}
            <section className="home__past-winners">
                {generateSectionHeading("Past Winners")}
                {generateWinners(winners)}
            </section>
            {/* Team Pictures */}
            <section className="home__team-pictures">
                {generateSectionHeading("Our Team")}
                <div className="home__team-pictures__grid clear">{generateTeamPics(team)}</div>
            </section>
            <Footer />
        </main>
    );
};

export default Home;
