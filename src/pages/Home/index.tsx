import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandHoldingHeart,
    faHandshake,
    faLaptopCode,
    faPalette,
    faMeteor,
    faSchool,
    faMicrochip,
    faSearch,
    faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useWindowDimensions from "../../components/WindowDimensions";

import HACKMERCED_TITLE from "../../assets/images/placeholder-title.png";
import HACKMERCED_TOWER from "../../assets/images/tower.png";
import TEAM_PICTURE from "../../assets/images/hackmerced-v.jpg";
import team from "../../assets/team";
import "./styles.scss";

const teampics = (team: Array<{ url: string; src: string }>): JSX.Element => {
    const teamArray: Array<JSX.Element> = team.map((member: { url: string; src: string }, index: number) => {
        const name: string = member.src.includes("/")
            ? member.src.split("/")[3].split(".")[0]
            : member.src.split(".")[0];
        return (
            <li key={index}>
                <div className="hexagon">
                    <a href={member.url} target="_blank" rel="noopener noreferrer">
                        <img className="Picture" src={member.src} alt={name.charAt(0).toUpperCase() + name.slice(1)} />
                    </a>
                </div>
            </li>
        );
    });

    return <ul className="CenterHexagons">{teamArray}</ul>;
};

const Home: FC = (): JSX.Element => {
    const { width } = useWindowDimensions();

    return (
        <main className="home">
            <Navbar />
            <section className="TITLE">
                {width > 700 ? (
                    <section className="t-wave">
                        <div className="cloud c1"></div>
                        <div className="cloud c2"></div>
                        <div className="cloud c3"></div>
                        <div className="cloud c4"></div>
                        <div className="cloud c5"></div>
                    </section>
                ) : null}
                <section className="hackmerced">
                    <img
                        src={HACKMERCED_TITLE}
                        width="400"
                        height="175"
                        alt="HACKMERCED TITLE"
                        className="hackmerced-title"
                    />
                    <div className="hackmerced-subtext text-gray-100">The biggest San Joaquin Valley hackathon.</div>
                    <div className="hackmerced-text text-gray-100">
                        Stay updated with HackMerced and subscribe to our email list!
                    </div>
                </section>
                {width > 700 ? (
                    <img
                        src={HACKMERCED_TOWER}
                        width="525"
                        height="1005"
                        alt="HACKMERCED TOWER"
                        className="hackmerced-tower"
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
                <nav className="winners">
                    <a href="https://devpost.com/software/helpers-spot" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faHandHoldingHeart} className="fa winner-icon" />
                        <h5 className="winner-title">Social Good</h5>
                        <h6 className="winner-group">Sustainably Yours</h6>
                    </a>
                    <a href="https://devpost.com/software/vibe-xja5cd" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faHandshake} className="fa winner-icon" />
                        <h5 className="winner-title">Inclusivity</h5>
                        <h6 className="winner-group">Undyslexify</h6>
                    </a>
                    <a href="https://devpost.com/software/kabobcat" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLaptopCode} className="fa winner-icon" />
                        <h5 className="winner-title">CyberSecurity</h5>
                        <h6 className="winner-group">Repul.ink</h6>
                    </a>
                    <a href="https://devpost.com/software/code-dude" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPalette} className="fa winner-icon" />
                        <h5 className="winner-title">Best in Design</h5>
                        <h6 className="winner-group">Sustainably Yours</h6>
                    </a>
                    <a href="https://devpost.com/software/snapcode-vabpfn" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSchool} className="fa winner-icon" />
                        <h5 className="winner-title">Best UC Merced-Related Hack</h5>
                        <h6 className="winner-group">Snapcode</h6>
                    </a>
                    <a href="https://devpost.com/software/esose" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSearch} className="fa winner-icon" />
                        <h5 className="winner-title">Tech for Social Good</h5>
                        <h6 className="winner-group">Vacchecker</h6>
                    </a>
                    <a href="https://devpost.com/software/3d-for-education" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMicrochip} className="fa winner-icon" />
                        <h5 className="winner-title">Best Hardware Hack</h5>
                        <h6 className="winner-group">EcoSafe</h6>
                    </a>
                    <a href="https://devpost.com/software/ghym" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMeteor} className="fa winner-icon" />
                        <h5 className="winner-title">Moonshot</h5>
                        <h6 className="winner-group">Blood Buds</h6>
                    </a>
                    <a href="https://devpost.com/software/a-clear-space" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDigitalOcean} className="fa winner-icon" />
                        <h5 className="winner-title">Best Domain Using Domain.com</h5>
                        <h6 className="winner-group">StreetSpots.Online</h6>
                    </a>
                    <a href="https://devpost.com/software/project-dms" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCloud} className="fa winner-icon" />
                        <h5 className="winner-title">Best Use of Google Cloud</h5>
                        <h6 className="winner-group">IdVision</h6>
                    </a>
                </nav>
            </section>
            <section className="home__team-pictures">
                <header className="Header">
                    <h1>Our Team</h1>
                    <div className="break-line"></div>
                </header>
                <div className="home__team-pictures grid clear">{teampics(team)}</div>
            </section>
            <Footer />
        </main>
    );
};

export default Home;
