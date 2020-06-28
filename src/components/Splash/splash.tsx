import React, { FC } from 'react';

import './splash.scss';

const Splash: FC = (): JSX.Element => {
    return (
        <main className="splash-body">
            <div className="splash-content">
                <section className="Header">
                    <h1>
                        Become a sponsor to empower and help <br></br> grow the next generation of HackMerced.
                    </h1>
                </section>
                <section className="splash-section">
                    <h4>Leave your mark in the Heart of California</h4>
                    <p>
                        As the newest UC, more than half of the student body is first generation. Joining HackMerced not
                        only brings awareness for your brand,<br></br> but also brings together the talent in the
                        Central Valley.
                    </p>
                </section>
                <section className="splash-section">
                    <h4>Connect with our diverse hackers</h4>
                    <p>
                        Network and build relationships in our HackMerced community and make your company known in our
                        events!
                    </p>
                </section>
                {/* <section className="splash-section">
                    <h4>Show off your tech</h4>
                    <p>
                        HackMerced is the largest collegiate hackathon, the best place to display your tech and see
                        hackers use your APIs in creative and innovative ways
                    </p>
                </section> */}
            </div>
            <form className="splash-form">
                <h3>Become a Sponsor</h3>
                <input id="nameInput" placeholder="Full Name"></input>
                <input id="companyInput" placeholder="Company"></input>
                <input id="emailInput" placeholder="Email"></input>
                <textarea id="contenInput" placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </main>
    );
};

export default Splash;
