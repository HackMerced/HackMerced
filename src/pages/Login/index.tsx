import React, { FC, Fragment, useState } from "react";
import Axios, { AxiosResponse } from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

import HACKMERCED_LOGO from "../../assets/images/hackmercedvi-logo.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import { environment } from "../../environments";
import "./styles.scss";
import { HackerState, TokenState } from "../../App.types";

const Login: FC<{
    updateHacker: React.Dispatch<React.SetStateAction<HackerState | undefined>>;
    updateToken: React.Dispatch<React.SetStateAction<TokenState | undefined>>;
}> = ({ updateHacker, updateToken }): JSX.Element => {
    const [form, setForm] = useState<{ email: string; password: string }>({ email: "", password: "" });
    const history = useHistory();

    // Handles Change on the fields of the form
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    // Handles the submission action when the submit button is pressed
    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        Axios.post(`${environment.HACKER_API}/v1/auth/login`, form, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response: AxiosResponse) => {
            if (response.status === 200 && response.statusText === "OK") {
                updateHacker(response.data.user);
                updateToken(response.data.token);
                history.push("/dashboard");
            }
        });
    };

    return (
        <Fragment>
            <Navbar />
            <main className="login-page">
                <div className="center-container">
                    <img className="logo" src={HACKMERCED_LOGO} alt="Logo" height={120} width={120} />
                    <h1 className="uppercase">log in</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            className="emailinput"
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                        />
                        <FontAwesomeIcon icon={faUser} className="blackicon" />
                        <input
                            onChange={handleInputChange}
                            className="passwordinput"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
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
                        <button className="submitbutton  uppercase" type="submit">
                            Log in
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Login;
