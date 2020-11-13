import React, { FC } from 'react';
// import Axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/NavBar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Hackmercedlogo from '../../assets/images/hackmerced-logo.png';

import './SignUp.scss';

const SignUp: FC = (): JSX.Element => {
    // const[form, setForm] = useState({email:"", password:""});
    // let { pathname } = useLocation();

    // const handleInputChange = (
    //     event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    // ): void => {
    //     const { name, value } = event.target;
    //     setForm({ ...form, [name]: value });
    // };

    // const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    //     event.preventDefault();
    //     console.log(form);
    //     Axios.post(`https://hackmerced-tomoe.herokuapp.com/v1/auth/login`, form).then(Response => console.log(Response));
    // }

    return (
        <>
            <Navbar />
            <main className="sign-page">
                <div className="center-container">
                    <img className="logo" src={Hackmercedlogo} alt="Logo" height={120} width={120} />
                    <h1>SIGN UP</h1>

                    <form>
                        <input
                            className="firstinput"
                            id="email"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            required
                        />

                        <input
                            className="firstinput"
                            id="email"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                        <input className="emailinput" type="email" placeholder="Email" id="email" name="email"></input>

                        <input
                            className="passwordinput"
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                        ></input>
                        <br></br>

                        <input type="checkbox" id="rememberme" name="remember" />

                        <div className="flex-container">
                            <h2 className="flex-item">
                                <h3>Remember Me?</h3>

                                {/* {pathname === '/login-resetpassword'} */}
                            </h2>
                            <h2 className="flex-item">
                                <button type="button">
                                    <Link to="/Login">
                                        <u>Already have an Account?</u>
                                    </Link>{' '}
                                    {/* NEED TO LINK TO SIGN-UP PAGE */}
                                    {/* {pathname === '/login-resetpassword'}                               THESE ARE PLACEHOLDERS */}
                                </button>
                            </h2>
                        </div>

                        <input className="submitbutton" type="submit" value="Create an Account"></input>
                    </form>

                    <div className="loginicons">
                        <p>Or Sign Up with</p>
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

export default SignUp;
