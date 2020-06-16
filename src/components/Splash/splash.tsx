import React, { FC } from 'react';

import './splash.scss';

const Splash: FC = (): JSX.Element => {
    return (
        <main className="splash-body">
            <div className="splash-content">
                <section className="Header">
                    <h1>Make HackMerced your event!</h1>
                </section>
                <section className="splash-section">
                    <h4>Establish your brand</h4>
                    <p>
                        HackMerced is the perfect way to establish your brand and build and grow awareness for your
                        company among thousands of talented engineers.
                    </p>
                </section>
                <section className="splash-section">
                    <h4>Connect with top candidates</h4>
                    <p>We can provide you everything you need to find top talent in the tech and hacker community.</p>
                </section>
                <section className="splash-section">
                    <h4>Show off your tech</h4>
                    <p>
                        HackMerced is the largest collegiate hackathon, the best place to display your tech and see
                        hackers use your APIs in creative and innovative ways
                    </p>
                </section>
            </div>
            <form className="splash-form">
                <h3>Lets get in touch!</h3>
                <input id="nameInput" placeholder="Full Name"></input>
                <input id="companyInput" placeholder="Company"></input>
                <input id="emailInput" placeholder="Email"></input>
                <textarea id="contenInput" placeholder="Comments"></textarea>
                <button type="submit">Send</button>
            </form>
        </main>
    );
};

export default Splash;
