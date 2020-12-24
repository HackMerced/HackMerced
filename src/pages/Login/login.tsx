import React, { FC, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import Hackmercedlogo from '../../assets/images/hackmercedvi-logo.png';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import { environment } from '../../environments';

import './login.scss';

const Login: FC = (): JSX.Element => {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        Axios.post(`${environment.HACKER_API}/v1/auth/login`, form).then(Response => console.log(Response));
    };

    return (
        <>
            <Navbar />
            <main className="login-page">
                <div className="center-container">
                    <img className="logo" src={Hackmercedlogo} alt="Logo" height={120} width={120} />
                    <h1 className="uppercase">log in</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            className="emailinput"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                        />
                        <FontAwesomeIcon icon={faUser} className="blackicon" />
                        <input
                            onChange={handleInputChange}
                            className="passwordinput"
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                        />
                        <FontAwesomeIcon icon={faKey} className="blackicon" />
                        <div className="flex-container">
                            <h2 className="flex-item">
                                <Link to="/login/reset-password">
                                    <u>Forgot Password?</u>
                                </Link>
                            </h2>
                            <h2 className="flex-item">
                                <Link to="/signup">
                                    <u>Create an Account</u>
                                </Link>
                            </h2>
                        </div>
                        <button className="submitbutton" type="submit">
                            <Link to="/dashboard" className="uppercase">
                                Log in
                            </Link>
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Login;
