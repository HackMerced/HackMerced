import React, { FC } from "react";

import Title from "../../components/Title";
import Navbar from "../../components/NavBar";
import About from "../../components/AboutUs";
import PastWinners from "../../components/PastWinners";
import Footer from "../../components/Footer";

import TRUMAN from "../../assets/images/truman.png";
import MARY from "../../assets/images/mary.jpg";
import ATHENA from "../../assets/images/athena.jpg";
import MANJOT from "../../assets/images/manjot.jpg";
import INTISER from "../../assets/images/Intiser.png";
import ALISSON from "../../assets/images/alisson.png";
import MARTHEN from "../../assets/images/marty.jpg";
import JET from "../../assets/images/jet.jpg";
import JOSEPH from "../../assets/images/joseph.jpg";
import SEAN from "../../assets/images/sean.jpg";
import GEHAD from "../../assets/images/gehad.jpg";

import "./styles.scss";

const team: Array<{ url: string; src: string }> = [
    {
        url: "https://www.linkedin.com/in/trumanjfchan/",
        src: TRUMAN,
    },
    {
        url: "https://www.linkedin.com/in/maryfrancine/",
        src: MARY,
    },
    {
        url: "https://www.linkedin.com/in/athena-siaotong/",
        src: ATHENA,
    },
    {
        url: "https://www.linkedin.com/in/manjot-singh-0a41a8195/",
        src: MANJOT,
    },
    {
        url: "https://www.linkedin.com/in/intiseraziz/",
        src: INTISER,
    },
    {
        url: "https://www.linkedin.com/in/alisson-ross-6a7b75182/",
        src: ALISSON,
    },
    {
        url: "https://www.linkedin.com/in/marthen-r-nodado/",
        src: MARTHEN,
    },
    {
        url: "https://www.linkedin.com/in/jatnael-montes/",
        src: JET,
    },
    {
        url: "https://www.linkedin.com/in/joseph-hoang-414836194/",
        src: JOSEPH,
    },
    {
        url: "https://www.linkedin.com/in/sean-ocal/",
        src: SEAN,
    },
    {
        url: "https://www.linkedin.com/in/gehad-elhanafy-a72723191/",
        src: GEHAD,
    },
];

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
    return (
        <main className="home">
            <Navbar />
            <Title />
            <About />
            <PastWinners />
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
