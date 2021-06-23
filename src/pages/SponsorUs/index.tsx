import React, { FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHandshake, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
// import PAST_SPONSORS from "../../assets/images/past-sponsors.png";
import A from "../../assets/images/sponsor-logos/1.png";
import B from "../../assets/images/sponsor-logos/2.png";
import C from "../../assets/images/sponsor-logos/3.png";
import D from "../../assets/images/sponsor-logos/4.png";
import E from "../../assets/images/sponsor-logos/5.png";
import F from "../../assets/images/sponsor-logos/6.png";
import G from "../../assets/images/sponsor-logos/7.png";
import H from "../../assets/images/sponsor-logos/8.png";
import I from "../../assets/images/sponsor-logos/9.png";
import J from "../../assets/images/sponsor-logos/10.png";
import K from "../../assets/images/sponsor-logos/11.png";
import L from "../../assets/images/sponsor-logos/12.png";


import "./styles.scss";

const SponsorUs: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Navbar />
            <main className="sponsors-us">
                {/* Information */}
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
                {/* <section className="sponsors-us__past-sponsors">
                    <h1 className="sponsors-us__past-sponsors__title">Past Sponsors</h1>
                    <img
                        src={PAST_SPONSORS}
                        width="100%"
                        alt="Past Hackathons Sponsors"
                        className="sponsors-us__past-sponsors__img"
                    />
                </section> */}
                <div id="past-sponsors">
                    Our Past Sponsors
                    <ul className="listt">
                        <li className="items"><img src={A} /></li>
                        <li className="items"><img src={B} /></li>
                        <li className="items"><img src={C} /></li>
                        <li className="items"><img src={D} /></li>
                        <li className="items"><img src={E} /></li>
                        <li className="items"><img src={F} /></li>
                        <li className="items"><img src={G} /></li>
                        <li className="items"><img src={H} /></li>
                        <li className="items"><img src={I} /></li>
                        <li className="items"><img src={J} /></li>
                        <li className="items"><img src={K} /></li>
                        <li className="items"><img src={L} /></li>
                    </ul>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default SponsorUs;
