import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import HMLOGO from '../../assets/images/hackmerced-logo.png';

import './application.scss';

const Application: FC = (): JSX.Element => {
    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    ): void => {
        const { name, value } = event.target;
        console.log(name, value);
    };

    return (
        <>
            <Navbar />
            <main className="contact-body">
                <div className="splash-content">
                    {/* Start of Form */}
                    <form className="splash-form" onSubmit={handleSubmit}>
                        <img src={HMLOGO} className="hackmerced-logo" alt="HackMerced Logo" />
                        <h3>Application Form</h3>
                        <div className="wrapper1">
                            <div className="input-wrapper1">
                                <label className="input-label" htmlFor="firstname">
                                    First Name
                                </label>
                                <input
                                    className="input-group"
                                    required
                                    placeholder="First Name"
                                    name="firstname"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-wrapper2">
                                <label className="input-label2" htmlFor="lastname">
                                    Last Name
                                </label>
                                <input
                                    className="input-group"
                                    required
                                    placeholder="Last Name"
                                    name="lastname"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="wrapper2">
                            <div className="input-wrapper3">
                                <label className="input-label3" htmlFor="university">
                                    University
                                </label>
                                <input
                                    className="input-group"
                                    id="university"
                                    required
                                    placeholder="University"
                                    name="University"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-wrapper4">
                                <label className="input-label4" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="input-group"
                                    id="email"
                                    required
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="wrapper3">
                            <div className="input-wrapper5">
                                <label className="input-label5" htmlFor="birthday">
                                    Birthday
                                </label>
                                <input
                                    className="input-group"
                                    id="birthday"
                                    required
                                    placeholder="Birthday"
                                    name="birthday"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-wrapper6">
                                <label className="input-label6" htmlFor="studylevel">
                                    Current Level of Study
                                </label>
                                <input
                                    className="input-group"
                                    id="studylevel"
                                    required
                                    placeholder="Current Level of Study"
                                    name="studylevel"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="wrapper4">
                            <div className="input-wrapper7">
                                <label className="input-label7" htmlFor="gender">
                                    Gender
                                </label>
                                <input
                                    className="input-group"
                                    id="gender"
                                    required
                                    placeholder="Gender"
                                    name="gender"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-wrapper8">
                                <label className="input-label8" htmlFor="race">
                                    Race
                                </label>
                                <input
                                    className="input-group"
                                    id="race"
                                    required
                                    placeholder="Race"
                                    name="race"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="location">
                                If you live in the US, what state do you currently live in? If you do not reside within
                                the US, what country are you from?
                            </label>
                            <textarea
                                id="location"
                                required
                                placeholder="If you live in the US, what state do you currently live in? If you do not reside within the US, what country are you from?"
                                name="location"
                                rows={2}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="how">How did you hear about DesignMerced?</label>
                            <input
                                id="how"
                                required
                                placeholder="How did you hear about DesignMerced?"
                                name="how"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstd">Will DesignMerced be your first Designathon?</label>
                            <input
                                id="firstd"
                                required
                                placeholder="Will DesignMerced be your first Designathon?"
                                name="firstd"
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className="font-black" type="submit">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Application;
