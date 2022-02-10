import React, { FC, Fragment} from "react";
//import Axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Contribute from "../../components/Contribute";
import useWindowDimensions from "../../components/WindowDimensions";
import { Link } from "react-router-dom";

import HACKMERCED_TITLE from "../../assets/images/placeholder-title.png";
import HACKMERCED_TITLE_WEBP from "../../assets/images/placeholder-title.webp";
import HACKMERCED_TOWER from "../../assets/images/tower.png";
import HACKMERCED_TOWER_WEBP from "../../assets/images/tower.webp";
import TEAM_PICTURE from "../../assets/images/hackmerced-v.jpg";
import TEAM_PICTURE_WEBP from "../../assets/images/hackmerced-v.webp";
import team from "../../assets/team";
import winners from "../../assets/winners";
import "./styles.scss";
// import jsonp from "jsonp";
// import queryString from 'querystring';


type TeamProps = {
    firstName?: string | undefined;
    lastName?: string | undefined;
    url: string;
    srcSet: string;
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
                <picture>
                    <img
                        className="home__team-pictures__grid__items__item__hexagon__picture"
                        srcSet={member.srcSet}
                        src={member.src}
                        alt={`${member.firstName} ${member.lastName}`}
                    />

                    <div className="home__team-pictures__grid__items__item__hexagon__text">{member.desc}</div>
                </picture>
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
                <div>
                    <FontAwesomeIcon icon={winner.icon} className="fa home__past-winners__list__past-winner__icon" />
                    <h5 className="home__past-winners__list__past-winner__category">{winner.category}</h5>
                    <div className="home__past-winners__list__past-winner__group">{winner.group}</div>
                </div>
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
    
//     const [form, setForm] = useState<{ email: string }>({ email: "" });

//     // Handles Change on the fields of the form
//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//         const { name, value } = event.target;
//         setForm({ ...form, [name]: value });
//        // console.log(form);
//    };
 
//     // Handles the submission action when the submit button is pressed
//     const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
//         const formData = {
//             EMAIL: form.email,
//         };
       
//         const baseURL = process.env.REACT_APP_MAILCHIMP_API_KEY;
//         const finalURL = baseURL + "&" + queryString.stringify(formData);
      
//         event.preventDefault();
//         jsonp(finalURL, { param: 'c' },  

//         );
//         alert("Subscribed to HackMerced Newsletter!");
//         // console.log(process.env.REACT_APP_MAILCHIMP_API_KEY);
//     }

    return (
        <main className="home">
            <Navbar />
            {/* Landing Section */}
            <section className="home__heading">
                {width > 499 ? (
                    <section className="home__heading__wave">
                        <div className="home__heading__wave__cloud c1"></div>
                        <div className="home__heading__wave__cloud c2"></div>
                        <div className="home__heading__wave__cloud c3"></div>
                        <div className="home__heading__wave__cloud c4"></div>
                        <div className="home__heading__wave__cloud c5"></div>
                    </section>
                ) : null}
                <section className="home__heading__content">
                    <div className="home__heading__content__tower">
                        <picture>
                            <img
                                srcSet={HACKMERCED_TOWER_WEBP}
                                src={HACKMERCED_TOWER}
                                className="home__heading__content__tower__image"
                                alt="HackMerced Tower"
                            />
                        </picture>
                    </div>
                    <div className="home__heading__content__title">
                        <picture>
                            <img
                                srcSet={HACKMERCED_TITLE_WEBP}
                                src={HACKMERCED_TITLE}
                                className="home__heading__content__title__img"
                                alt="HackMerced Title"
                            />
                        </picture>
                        <div className="home__heading__content__title__text">The biggest San Joaquin Valley hackathon.</div>
                        <div className="home__heading__content__title__sub-text">Stay updated with HackMerced and subscribe to our email list!</div>
                        <Link to="/hackmercedvii"><button className="home__heading__content__title__event-button">HackMerced VII</button></Link>
                        {/* <form className="home__heading__content__title__form" onSubmit={handleSubmit}>
                            <input
                                className="home__heading__content__title__form_input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form> */}
                        {/* PLEASE DONT UNCOMMENT THIS UNLESS YOU HAVE CHANGE THIS FEATURE TO A MAIL FORM AND FIT THE DESIGN OF THE WEBSITE */}
                    </div>
                </section>
            </section>

            {/* About Us */}
            <section className="home__about-us">
                {generateSectionHeading("About Us")}
                <section className="home__about-us__content">
                    <p>
                        HackMerced is a 36 hour annual programming competition that occurs at the University of
                        California, Merced and is open to students from all over the world. During the event,
                        participants will collaborate in teams and attend workshops to learn about new technologies.
                        <br />
                        <br />
                        We aim to create a collaborative, interdisciplinary event that brings together students from all
                        universities and prospective sponsors to see the innovation and creativity culminating within
                        the San Joaquin Valley.
                    </p>
                    <picture>
                        <img
                            className="home__about-us__content__teampic"
                            srcSet={TEAM_PICTURE_WEBP}
                            src={TEAM_PICTURE}
                            alt="HackMerced Team"
                        />
                    </picture>
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
            {/* Contribute */}
            <section className="home__contribute">
                {generateSectionHeading("Contribute!")}
                <Contribute />
            </section>
            <Footer />
        </main>
    );
};

export default Home;
