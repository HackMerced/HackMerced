import React, { FC, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import Hackmercedlogo from '../../assets/images/hackmercedvi-logo.png';
import './SignUp.scss';
import { environment } from '../../environments';

const SignUp: FC = (): JSX.Element => {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        Axios.post(`${environment.HACKER_API}/v1/auth/register`, form, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => console.log(response));
    };

    return (
        <>
            <Navbar />
            <main className="sign-page">
                <div className="center-container">
                    <img className="logo" src={Hackmercedlogo} alt="Logo" height={120} width={120} />
                    <h1 className="uppercase">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="firstinput"
                            id="email"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            required
                            onChange={handleInputChange}
                        />
                        <input
                            className="firstinput"
                            id="email"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            required
                            onChange={handleInputChange}
                        />
                        <input
                            className="emailinput"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            onChange={handleInputChange}
                        />
                        <input
                            className="passwordinput"
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            onChange={handleInputChange}
                        />
                        <br />
                        <div className="flex-container">
                            <input type="checkbox" id="rememberme" name="remember" />
                            <h3 className="flex-item">Remember Me?</h3>
                            <h2 className="flex-item">
                                <Link to="/Login">
                                    <u>Already have an Account?</u>
                                </Link>
                            </h2>
                        </div>
                        <button className="submitbutton" type="submit">
                            Create an Account
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default SignUp;
