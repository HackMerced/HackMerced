import React, { FC, useState } from 'react';
import Axios from 'axios';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Hackmercedlogo from '../../assets/images/hackmerced-logo.png';

import './login-resetpassword.scss';

const LoginResetPassword: FC = (): JSX.Element => {
    const [form, setForm] = useState({ email: "" });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(form);
        Axios.post(`https://hackmerced-tomoe.herokuapp.com/v1/auth/login-resetpassword`, form).then(Response => console.log(Response));
    }

    return (
        <>
            <Navbar />
            <section className="reset-page">
                <div className="center-container">
                    <img className="logo" src={Hackmercedlogo} alt="Logo" />
                    <h1>Reset Password</h1>
                    <form onSubmit={handleSubmit} className="form-container">
                        <input onChange={handleInputChange} className="emailinput" type="email" placeholder="Email" id="email" name="email" />
                        <FontAwesomeIcon icon={faUser} className="blackicon" />
                        <input className="submitbutton" type="submit" value="Submit" />
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default LoginResetPassword;
