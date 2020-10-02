import React, { FC, useState } from 'react';
import Axios from 'axios';

import useWindowDimensions from '../WindowDimensions/WindowDimensions';
import HMTITLE from '../../assets/images/placeholder-title.png';
import HMTOWER from '../../assets/images/tower.png';
import './title.scss';

const Title: FC = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({ FNAME: '', LNAME: '', email_address: '' });
    const { width } = useWindowDimensions();

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();

        Axios({
            method: 'POST',
            url: 'https://hackmerced-myriagon.herokuapp.com/v1/mailchimp/subscribe',
            data: {
                email_address: values.email_address,
                merge_fields: {
                    FNAME: values.FNAME,
                    LNAME: values.LNAME,
                },
            },
        }).then(response => {
            console.log(response);
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const openModal = (): void => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (): void => {
        setShowModal(false);
        document.body.style.overflow = 'scroll';
    };

    return (
        <header className="TITLE">
            {width > 700 ? (
                <section className="t-wave">
                    <div className="cloud c1"></div>
                    <div className="cloud c2"></div>
                    <div className="cloud c3"></div>
                    <div className="cloud c4"></div>
                    <div className="cloud c5"></div>
                </section>
            ) : null}
            <section className="hackmerced">
                <img src={HMTITLE} width="400" height="175" alt="HACKMERCED TITLE" className="hackmerced-title" />
                <div className="hackmerced-subtext text-gray-100">The biggest San Joaquin Valley hackathon.</div>
                <div className="hackmerced-text text-gray-100">
                    Stay updated with HackMerced and subscribe to our email list!
                </div>
                <button
                    className="subscribe-button bg-white text-black font-bold"
                    // className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    onClick={openModal}
                >
                    Subscribe
                </button>
            </section>
            {showModal ? (
                <div className="overlay light" onClick={closeModal}>
                    <article className="subscribe">
                        <h3>HackMerced Mailing List</h3>
                        <form className="form" onSubmit={handleSubmit}>
                            <label className="form-label first-name-label" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                className="first-name-input"
                                name="FNAME"
                                placeholder="First Name"
                                type="text"
                                required
                                onChange={handleInputChange}
                            />
                            &nbsp;&nbsp;
                            <label className="form-label last-name-label" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                className="last-name-input"
                                name="LNAME"
                                placeholder="Last Name"
                                type="text"
                                required
                                onChange={handleInputChange}
                            />
                            <br />
                            <label className="form-label email-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                className="email-input"
                                name="email_address"
                                placeholder="Email"
                                type="email"
                                required
                                onChange={handleInputChange}
                            />
                            <button className="form-submit-button">Submit</button>
                        </form>
                    </article>
                </div>
            ) : null}
            {width > 700 ? (
                <img src={HMTOWER} width="525" height="1005" alt="HACKMERCED TITLE" className="hackmerced-tower" />
            ) : null}
        </header>
    );
};

export default Title;
