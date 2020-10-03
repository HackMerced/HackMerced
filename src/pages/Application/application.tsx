import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';

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
                        
                        <h3>DesignMerced Form</h3>
                        <div className="wrapper1">
                            <div className="input-wrapper1">
                                <label className="input-label" htmlFor="firstname">First Name</label>
                                <input
                                    className="input-group"
                                    required
                                    placeholder="First Name"
                                    name="firstname"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-wrapper2">
                                <label className="input-label2" htmlFor="lastname">Last Name</label>
                                <input
                                    className="input-group"
                                    required
                                    placeholder="Last Name"
                                    name="lastname"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="university">University</label>
                            <input
                                id="university"
                                required
                                placeholder="University"
                                name="University"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input id="email" required placeholder="Email" name="email" onChange={handleInputChange} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="birthday">Birthday</label>
                            <input
                                id="birthday"
                                required
                                placeholder="Birthday"
                                name="birthday"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="studylevel">Current Level of Study</label>
                            <input
                                id="studylevel"
                                required
                                placeholder="Current Level of Study"
                                name="studylevel"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="gender">Gender</label>
                            <input
                                id="gender"
                                required
                                placeholder="Gender"
                                name="gender"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="race">Race</label>
                            <input id="race" required placeholder="Race" name="race" onChange={handleInputChange} />
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
                        <button type="submit">Send</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Application;
