import React, { FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHandshake, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import A from "../../assets/images/sponsor-logos/ASUCM.png";
import B from "../../assets/images/sponsor-logos/MLH.png";
import C from "../../assets/images/sponsor-logos/1Password.png";
import D from "../../assets/images/sponsor-logos/Alumni.png";
import E from "../../assets/images/sponsor-logos/Adobe.png";
import F from "../../assets/images/sponsor-logos/Sketch.png";
import G from "../../assets/images/sponsor-logos/Citrus.png";
import H from "../../assets/images/sponsor-logos/Replit.png";
import I from "../../assets/images/sponsor-logos/ACM.png";
import J from "../../assets/images/sponsor-logos/MakeSchool.png";
import K from "../../assets/images/sponsor-logos/JetBrains.png";
import L from "../../assets/images/sponsor-logos/Snorkel.png";
import M from "../../assets/images/sponsor-logos/InterviewCake.png";
import N from "../../assets/images/sponsor-logos/Stickermule.png";
import O from "../../assets/images/sponsor-logos/VentureLab.png";
import P from "../../assets/images/sponsor-logos/WolframLanguage.png";
import Q from "../../assets/images/sponsor-logos/ZuckerbergInitiative.png";
import R from "../../assets/images/sponsor-logos/MakeyMakey.png";
import S from "../../assets/images/sponsor-logos/CoolerMaster.png";
import T from "../../assets/images/sponsor-logos/MonsterEnergy.png";
import U from "../../assets/images/sponsor-logos/MercoCU.png";
import V from "../../assets/images/sponsor-logos/GoodDayChocolate.png";
import W from "../../assets/images/sponsor-logos/GuayakiYerbaMate.png";
import X from "../../assets/images/sponsor-logos/Vanguard.png";
import Y from "../../assets/images/sponsor-logos/UCANR.png";
import Z from "../../assets/images/sponsor-logos/OSI.png";
import AA from "../../assets/images/sponsor-logos/IT.png";


import "./styles.scss";

const SponsorUs: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Navbar />
            <main className="sponsors-us">
                
                {/* Sponsors Information */}
                <div className="sponsors-us__content">
                    <div className="sponsors-us__content__heading">
                        Become a sponsor to empower and help <br></br> grow the next generation of HackMerced.
                    </div>
                    <section className="sponsors-us__content__section">
                        <FontAwesomeIcon icon={faHeart} className="fa sponsors-us__content__section__icon" />
                        <h4 className="sponsors-us__content__section__title">
                            Leave your mark in the Heart of California
                        </h4>
                        <p className="sponsors-us__content__section__text">
                            As the newest UC, more than half of the student body is first generation. Joining HackMerced
                            not only brings awareness for your brand,<br></br> but also brings together the talent in
                            the Central Valley.
                        </p>
                        <br />
                        <FontAwesomeIcon icon={faHandshake} className="fa sponsors-us__content__section__icon" />
                        <h4 className="sponsors-us__content__section__title">Connect with our diverse hackers</h4>
                        <p className="sponsors-us__content__section__text">
                            Network and build relationships in our HackMerced community and make your company known in
                            our events!
                        </p>
                        <br />
                        <FontAwesomeIcon icon={faInfoCircle} className="fa sponsors-us__content__section__icon" />
                        <h4 className="sponsors-us__content__section__title">For more Information</h4>
                        <p className="sponsors-us__content__section__text">
                            If you want more information, please fill the following form out or email us at&nbsp;
                            <a href="mailto:sponsors@hackmerced.com?subject=HackMerced Sponsor Inquiry&amp;body=Dear HackMerced,">
                                sponsors@hackmerced.com
                            </a>
                        </p>
                    </section>
                </div>

                {/* Form to Submit a Request */}
                <Form formTitle="Sponsor Us" askCompany={true} formRequest="sponsor" />

                {/* Past Sponsors Gallery */}
                <div className="past-sponsors">
                    <div className="logos-title">Our Past Sponsors</div>
                    <ul className="list">
                        <li className="items"><img className="logoimage" src={A} alt="ASUCM-Logo" /></li>
                        <li className="items"><img className="logoimage" src={B} alt="MLH-Logo" /></li>
                        <li className="items"><img className="logoimage" src={C} alt="1PASSWORD-Logo" /></li>
                        <li className="items"><img className="logoimage" src={D} alt="HACKMERCED-Logo" /></li>
                        <li className="items"><img className="logoimage" src={E} alt="ADOBE-Logo" /></li>
                        <li className="items"><img className="logoimage" src={F} alt="SKETCH-Logo" /></li>
                        <li className="items"><img className="logoimage" src={G} alt="CITRIS-Logo" /></li>
                        <li className="items"><img className="logoimage" src={H} alt="REPL-Logo" /></li>
                        <li className="items"><img className="logoimage" src={I} alt="ACM-Logo" /></li>
                        <li className="items"><img className="logoimage" src={J} alt="MAKESCHOOL-Logo" /></li>
                        <li className="items"><img className="logoimage" src={K} alt="JETBRAINS-Logo" /></li>
                        <li className="items"><img className="logoimage" src={L} alt="SNORKEL-Logo" /></li>
                        <li className="items"><img className="logoimage" src={M} alt="INTERVIEWCAKE-Logo" /></li>
                        <li className="items"><img className="logoimage" src={N} alt="STICKERMULE-Logo" /></li>
                        <li className="items"><img className="logoimage" src={O} alt="VENTURELAB-Logo" /></li>
                        <li className="items"><img className="logoimage" src={P} alt="WOLFRAMLANGUAGE-Logo" /></li>
                        <li className="items"><img className="logoimage" src={Q} alt="ZUCKERBERGINITIATIVE-Logo" /></li>
                        <li className="items"><img className="logoimage" src={R} alt="MAKEYMAKEY-Logo" /></li>
                        <li className="items"><img className="logoimage" src={S} alt="COOLERMASTER-Logo" /></li>
                        <li className="items"><img className="logoimage" src={T} alt="MONSTERENERGY-Logo" /></li>
                        <li className="items"><img className="logoimage" src={U} alt="MERCO-Logo" /></li>
                        <li className="items"><img className="logoimage" src={V} alt="GOODDAY-Logo" /></li>
                        <li className="items"><img className="logoimage" src={W} alt="GUAYAKI-Logo" /></li>
                        <li className="items"><img className="logoimage" src={X} alt="VANGUARD-Logo" /></li>
                        <li className="items"><img className="logoimage" src={Y} alt="UCANR-Logo" /></li>
                        <li className="items"><img className="logoimage" src={Z} alt="OSI-Logo" /></li>
                        <li className="items"><img className="logoimage" src={AA} alt="IT-Logo" /></li>
                    </ul>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default SponsorUs;
