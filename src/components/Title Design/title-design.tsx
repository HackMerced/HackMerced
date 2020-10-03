import React, { FC, useState } from 'react';
import Axios from 'axios';

import Title from '../../assets/images/title.png';
import './title-design.scss';

const TitleDesign: FC = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({ FNAME: '', LNAME: '', email_address: '' });

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();

        Axios({
            method: 'POST',
            url: 'https://hackmerced-myriagon.herokuapp.com/v1/mailchimp/apply',
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
        <header className="TITLEDESIGN">
            <section className="designmerced">
                <img src={Title} width="auto" alt="DESIGNMERCED TITLE" className="designmerced-title" />
                <div className="designmerced-subtext text-gray-100">November 21st, 2020</div>
                <div className="designmerced-text text-gray-100">Apply today to see if you have what it takes!</div>
                <button className="apply-button bg-white text-black font-bold" onClick={openModal}>
                    Apply
                </button>
            </section>
            {showModal ? (
                <div className="overlay light" onClick={closeModal}>
                    <article className="apply">
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
        </header>
    );
};

export default TitleDesign;
