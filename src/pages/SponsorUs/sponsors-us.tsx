import React, { FC } from 'react';

import NavbarOrange from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Form from '../../components/Form/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHandshake } from '@fortawesome/free-solid-svg-icons';

import './sponsor-us.scss';

const SponsorUs: FC = (): JSX.Element => {
    return (
        <>
            <NavbarOrange />
            <main className="sponsors-body">
                <div className="sponsors-content">
                    <section className="Header">
                        <h1>
                            Become a sponsor to empower and help <br></br> grow the next generation of HackMerced.
                        </h1>
                    </section>
                    <section className="sponsors-section">
                        <a style={{ color: '#0000' }}>
                            <FontAwesomeIcon icon={faHeart} className="fa" />
                        </a>

                        <h4>Leave your mark in the Heart of California</h4>
                        <p>
                            As the newest UC, more than half of the student body is first generation. Joining HackMerced
                            not only brings awareness for your brand,<br></br> but also brings together the talent in
                            the Central Valley.
                        </p>
                    </section>
                    <section className="sponsors-section">
                        <a style={{ color: '#0000' }}>
                            <FontAwesomeIcon icon={faHandshake} className="fa" />
                        </a>
                        <h4>Connect with our diverse hackers</h4>
                        <p>
                            Network and build relationships in our HackMerced community and make your company known in
                            our events!
                        </p>
                    </section>
                </div>
                <Form formTitle="Sponsor Us" askCompany={true} />
            </main>
            <Footer />
        </>
    );
};

export default SponsorUs;
