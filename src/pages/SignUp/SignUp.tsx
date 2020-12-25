import React, { FC, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { Link, useHistory } from 'react-router-dom';

import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import HACKMERCED_LOGO from '../../assets/images/hackmercedvi-logo.png';
import './SignUp.scss';
import { environment } from '../../environments';
import { HackerState, TokenState } from '../../App.types';

const SignUp: FC<{
    updateHacker: React.Dispatch<React.SetStateAction<HackerState | undefined>>;
    updateToken: React.Dispatch<React.SetStateAction<TokenState | undefined>>;
}> = ({ updateHacker, updateToken }): JSX.Element => {
    const [form, setForm] = useState<{ firstName: string; lastName: string; email: string; password: string }>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const history = useHistory();

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
        }).then((response: AxiosResponse) => {
            if (response.status === 201 && response.statusText === 'Created') {
                updateHacker(response.data.user);
                updateToken(response.data.token);
                history.push('/dashboard');
            }
        });
    };

    return (
        <>
            <Navbar />
            <main className="SIGNUP">
                <div className="SIGNUP__container">
                    <img
                        className="SIGNUP__container__logo"
                        src={HACKMERCED_LOGO}
                        alt="Logo"
                        height={120}
                        width={120}
                    />
                    <h1 className="SIGNUP__container__title uppercase">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="SIGNUP__container__form">
                        <input
                            className="SIGNUP__container__form__first-name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            required
                            onChange={handleInputChange}
                        />
                        <input
                            className="SIGNUP__container__form__last-name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            required
                            onChange={handleInputChange}
                        />
                        <input
                            className="SIGNUP__container__form__email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="SIGNUP__container__form__password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <h2 className="SIGNUP__container__form__already-member">
                            <Link to="/Login">Already have an Account?</Link>
                        </h2>
                        <button className="SIGNUP__container__form__submit-button" type="submit">
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
