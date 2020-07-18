import React, { FC, useState } from 'react';
import Axios from 'axios';

import useWindowDimensions from '../WindowDimensions/WindowDimensions';
import HMTITLE from '../../assets/images/placeholder-title.png';
import HMTOWER from '../../assets/images/tower.png';
import './title.scss';

const Title: FC = () => {
    const [values, setValues] = useState({ name: '', email: '' });
    const { width } = useWindowDimensions();

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();

        Axios({
            method: 'POST',
            url: 'https://hackmerced-myriagon.herokuapp.com/v1/mongo/storage',
            data: values,
        }).then(response => {
            console.log(response);
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <header className="TITLE">
            <section className="t-wave">
                <div className="cloud c1"></div>
                <div className="cloud c2"></div>
                <div className="cloud c3"></div>
                <div className="cloud c4"></div>
                <div className="cloud c5"></div>
            </section>
            <section className="hackmerced">
                <img src={HMTITLE} width="400" height="175" alt="HACKMERCED TITLE" className="hackmerced-title" />
                <div className="hackmerced-subtext text-gray-100">The biggest San Joaquin Valley hackathon.</div>
                <div className="hackmerced-text text-gray-100">
                    Stay updated with HackMerced and subscribe to our email list!
                </div>
                <button
                    className="bg-white text-black font-bold"
                    onClick={(): void => {
                        window.location.href = '#subscribe-modal';
                    }}
                >
                    Subscribe
                </button>
                {/* <div className="subscribe-container">
                    <form className="subscribe">
                        <input className="email-input" type="email" placeholder="Enter email for updates" />
                        <button type="submit">→</button>
                    </form>
                </div> */}
            </section>
            <div id="subscribe-modal" className="overlay light">
                {/* eslint-disable-next-line */}
                <a className="cancel" href="/#"></a>
                <article className="subscribe">
                    <h3>HackMerced Mailing List</h3>
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 className="form-label">Name</h2>
                        <input name="name" placeholder="Name" type="text" required onChange={handleInputChange} />
                        <br />
                        <h2 className="form-label">Email</h2>
                        <input name="email" placeholder="Email" type="email" required onChange={handleInputChange} />
                        <br />
                        <button className="form-submit-button">Submit</button>
                    </form>
                    <br />
                </article>
            </div>
            {width > 700 ? (
                <img src={HMTOWER} width="525" height="1005" alt="HACKMERCED TITLE" className="hackmerced-tower" />
            ) : null}
        </header>
    );
};

export default Title;
