import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHandshake, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Form from '../../components/Form/Form';
import PASTSPONSORS from '../../assets/images/past-sponsors.png';

import './sponsor-us.scss';

const SponsorUs: FC = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <main className="sponsors-body">
                <div className="sponsors-content">
                    <header className="text-3xl md:text-5xl">
                        Become a sponsor to empower and help <br></br> grow the next generation of HackMerced.
                    </header>
                    <section className="sponsors-section">
                        <FontAwesomeIcon icon={faHeart} className="fa" />
                        <h4>Leave your mark in the Heart of California</h4>
                        <p>
                            As the newest UC, more than half of the student body is first generation. Joining HackMerced
                            not only brings awareness for your brand,<br></br> but also brings together the talent in
                            the Central Valley.
                        </p>
                    </section>
                    <section className="sponsors-section">
                        <FontAwesomeIcon icon={faHandshake} className="fa" />
                        <h4>Connect with our diverse hackers</h4>
                        <p>
                            Network and build relationships in our HackMerced community and make your company known in
                            our events!
                        </p>
                    </section>
                    <section className="sponsors-section">
                        <a style={{ color: '#0000' }}>
                            <FontAwesomeIcon icon={faInfoCircle} className="fa" />
                        </a>
                        <h4>For more Information</h4>
                        <p>If you want more information, check out our sponsorship packet.</p>
                    </section>
                </div>
                <Form formTitle="Sponsor Us" askCompany={true} formRequest="sponsor" />
                <section className="past-sponsors text-3xl md:text-5xl">
                    <h1>Past Sponsors</h1>
                    <img src={PASTSPONSORS} width="100%" alt="Past Hackathons Sponsors" />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SponsorUs;
