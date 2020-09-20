import React, { FC } from 'react';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons"

import Hackmercedlogo from '../../assets/images/hackmerced-logo.png';

import './login.scss';


const Login: FC = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <main className="login-page">
                <div className="center-container">
                    <img className="logo" src={Hackmercedlogo} alt="Logo" height={120} width={120} />
                    <h1>LOGIN</h1>

                    <form>
                        <input className="emailinput" type="email" placeholder="Email" id="email" name="email"></input>
                        <FontAwesomeIcon icon={faUser} className="blackicon" />
                        <input className="passwordinput" type="password" placeholder="Password" id="password" name="password"></input>
                        <FontAwesomeIcon icon={faKey} className="blackicon" />

                        <div className="flex-container">
                            <h2 className="flex-item"><u>Forgot Password?</u></h2>
                            <h2 className="flex-item"><u>Create an Account</u></h2>
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