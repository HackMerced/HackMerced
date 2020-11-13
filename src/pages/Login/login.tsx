import React, { FC, useState } from 'react';
import Axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import Hackmercedlogo from '../../assets/images/hackmerced-logo.png';

import './login.scss';

const Login: FC = (): JSX.Element => {
    const[form, setForm] = useState({email:"", password:""});
    let { pathname } = useLocation();

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(form);
        Axios.post(`https://hackmerced-tomoe.herokuapp.com/v1/auth/login`, form).then(Response => console.log(Response));
    }

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
                                <button type="button">
                                    <Link to="/login-resetpassword"><u>Forgot Password?</u></Link>
                                    {pathname === '/login-resetpassword'}
                                </button>
                            </h2>
                            <h2 className="flex-item">
                                <button type="button">
                                    <Link to="/SignUp"><u>Create an Account</u></Link>     {/* NEED TO LINK TO SIGN-UP PAGE */}
                                    {pathname === '/SignUp'}                               {/* THESE ARE PLACEHOLDERS */}
                                </button>
                            </h2>
                        </div>

                        <input className="submitbutton" type="submit" value="LOG IN"></input>
                    </form>

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
