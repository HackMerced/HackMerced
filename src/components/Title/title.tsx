import React, { FC, useState, useEffect } from 'react';
import Axios from 'axios';
import Modal from 'react-modal';

import useWindowDimensions from '../WindowDimensions/WindowDimensions';
import HMTITLE from '../../assets/images/placeholder-title.png';
import HMTOWER from '../../assets/images/tower.png';
import './title.scss';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Title: FC = (): JSX.Element => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState({ name: '', email_address: '' });
    const { width } = useWindowDimensions();

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();

        Axios({
            method: 'POST',
            url: 'https://hackmerced-myriagon.herokuapp.com/v1/mailchimp/subscribe',
            data: values,
        }).then(response => {
            console.log(response);
        });
    };

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const openModal = (): void => {
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
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
                <button className="bg-white text-black font-bold" onClick={openModal}>
                    Subscribe
                </button>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Subscribe Modal"
                // className="overlay light"
                // id="subscribe-modal"
            >
                <button className="cancel" onClick={closeModal}>
                    close
                </button>
                <article className="subscribe">
                    <h3>HackMerced Mailing List</h3>
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 className="form-label">Name</h2>
                        <input name="name" placeholder="Name" type="text" required onChange={handleInputChange} />
                        <br />
                        <h2 className="form-label">Email</h2>
                        <input
                            name="email_address"
                            placeholder="Email"
                            type="email"
                            required
                            onChange={handleInputChange}
                        />
                        <br />
                        <button className="form-submit-button">Submit</button>
                    </form>
                    <br />
                </article>
            </Modal>
            {width > 700 ? (
                <img src={HMTOWER} width="525" height="1005" alt="HACKMERCED TITLE" className="hackmerced-tower" />
            ) : null}
        </header>
    );
};

export default Title;
