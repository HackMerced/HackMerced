import React, { FC } from "react";
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
};

type WinnersProps = {
    icon: IconDefinition;
    category: string;
    group: string;
    project: string;
};

const generateTeamPics = (team: Array<TeamProps>): JSX.Element => {
    const teamArray: Array<JSX.Element> = team.map((member: TeamProps, index: number) => (
        <li key={index}>
            <div className="hexagon">
                <a href={member.url} target="_blank" rel="noopener noreferrer">
                    <img className="Picture" src={member.src} alt={`${member.firstName} ${member.lastName}`} />
                </a>
            </div>
        </li>
    ));

    return <ul className="CenterHexagons">{teamArray}</ul>;
};

const generateWinners = (winners: Array<WinnersProps>): JSX.Element => {
    const winnersArray: Array<JSX.Element> = winners.map((winner: WinnersProps, index: number) => (
        <li key={index}>
            <a href={winner.project} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={winner.icon} className="fa winner-icon" />
                <h5 className="winner-category">{winner.category}</h5>
                <h6 className="winner-group">{winner.group}</h6>
            </a>
        </li>
    ));

    return <ul className="winners">{winnersArray}</ul>;
};

const Home: FC = (): JSX.Element => {
    const { width } = useWindowDimensions();

    return (
        <main className="home">
            <Navbar />
            <section className="TITLE home__heading">
                {width > 700 ? (
                    <section className="t-wave home__heading__wave">
                        <div className="cloud home__heading__cloud c1"></div>
                        <div className="cloud home__heading__cloud c2"></div>
                        <div className="cloud home__heading__cloud c3"></div>
                        <div className="cloud home__heading__cloud c4"></div>
                        <div className="cloud home__heading__cloud c5"></div>
                    </section>
                ) : null}
                <section className="hackmerced home_heading__title">
                    <img
                        src={HACKMERCED_TITLE}
                        width="400"
                        height="175"
                        alt="HACKMERCED TITLE"
                        className="hackmerced-title home__heading__title__img"
                    />
                    <div className="hackmerced-text home__heading__title__subtext text-gray-100">
                        The biggest San Joaquin Valley hackathon.
                    </div>
                    <div className="hackmerced-text home__heading__title__sub-text text-gray-100">
                        Stay updated with HackMerced and subscribe to our email list!
                    </div>
                </section>
                {width > 700 ? (
                    <img
                        src={HACKMERCED_TOWER}
                        width="525"
                        height="1005"
                        alt="HACKMERCED TOWER"
                        className="hackmerced-tower home__heading__tower"
                    />
                ) : null}
            </section>
            <section className="about-us">
                <h1 className="about-us__title">About Us</h1>
                <div className="about-us__break-line"></div>
                <section className="about-us__content">
                    <article className="about-us__content__description">
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
                    <img className="about-us__content__team-picture" src={TEAM_PICTURE} alt="HackMerced Team" />
                </section>
            </section>
            <section className="PAST-WINNERS">
                <h3 className="past-winners-title">Past Winners</h3>
                <div className="break-line"></div>
                {generateWinners(winners)}
            </section>
            <section className="home__team-pictures">
                <header className="Header">
                    <h1>Our Team</h1>
                    <div className="break-line"></div>
                </header>
                <div className="home__team-pictures grid clear">{generateTeamPics(team)}</div>
            </section>
            <Footer />
        </main>
    );
};

export default Home;
