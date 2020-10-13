import React, { FC, useState } from 'react';
import Axios from 'axios';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import Hackmercedlogo from '../../assets/images/hackmerced-logo.png';

import './login.scss';

const Login: FC = (): JSX.Element => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [modalForm, setModalForm] = useState({ email: "" });

    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleModalInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name } = event.target;
        setModalForm({ ...modalForm, [name]: name });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(form);
        Axios.post(`https://hackmerced-tomoe.herokuapp.com/v1/auth/login`, form).then(Response => console.log(Response));
    };

    const handleModalSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(modalForm);
        Axios.post(`https://hackmerced-tomoe.herokuapp.com/v1/auth/login`, modalForm).then(Response => console.log(Response));
    };

    const openModal = (): void => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    /* const closeModal = (): void => {
        setShowModal(false);
        document.body.style.overflow = 'scroll';
    }; */

    return (
        <>
            <Navbar />
            <main className="login-page">
                <div className="center-container">
                    <img className="logo" src={Hackmercedlogo} alt="Logo" height={120} width={120} />
                    <h1>LOGIN</h1>

                    <form onSubmit={handleSubmit}>
                        <input onChange={handleInputChange} className="emailinput" type="email" placeholder="Email" id="email" name="email"></input>
                        <FontAwesomeIcon icon={faUser} className="blackicon" />
                        <input onChange={handleInputChange}
                            className="passwordinput"
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                        ></input>
                        <FontAwesomeIcon icon={faKey} className="blackicon" />

                        <div className="flex-container">
                            <h2 className="flex-item">
                                <button type="button" className="modal-btn"
                                    onClick={() => {
                                        openModal();
                                    }}> <u>Forgot Password?</u>
                                </button>
                            </h2>

                            <h2 className="flex-item">
                                <button type="button"> <u>Create an Account</u> </button>
                            </h2>
                        </div>

                        <input className="submitbutton" type="submit" value="LOG IN"></input>
                    </form>

                    {showModal ? (
                        <div className="modal-center-container-overlay light" onClick={openModal}>
                            <form className="modal-form" onSubmit={handleModalSubmit}>
                                <input
                                    className="modal-email-input"
                                    placeholder="Email"
                                    type="email"
                                    required
                                    onChange={handleModalInputChange}
                                />
                                <button className="modal-form-submit-button">Submit</button>
                                <h3>After submitting, refresh the page or go to another page.</h3>
                            </form>
                        </div>
                    ) : null}

                    <div className="loginicons">
                        <p>Or login with</p>
                        <FontAwesomeIcon icon={faFacebook} className="facebookicon" />
                        <FontAwesomeIcon icon={faGoogle} className="googleicon" />
                        <FontAwesomeIcon icon={faGithub} className="githubicon" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Login;
