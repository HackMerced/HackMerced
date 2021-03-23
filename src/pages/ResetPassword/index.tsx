import React, { FC, Fragment, useState } from "react";
import Axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import HACKMERCED_LOGO from "../../assets/images/hackmerced-logo.png";
import "./styles.scss";

const ResetPassword: FC = (): JSX.Element => {
    const [form, setForm] = useState<{ email: string }>({ email: "" });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        Axios.post(
            `https://hackmerced-tomoe.herokuapp.com/v1/auth/login-resetpassword`,
            form,
        ).then((response: AxiosResponse) => console.log(response));
    };

    return (
        <Fragment>
            <Navbar />
            <section className="reset-page">
                <div className="center-container">
                    <img className="logo" src={HACKMERCED_LOGO} alt="Logo" />
                    <h1>Reset Password</h1>
                    <form onSubmit={handleSubmit} className="form-container">
                        <input
                            onChange={handleInputChange}
                            className="emailinput"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                        />
                        <FontAwesomeIcon icon={faUser} className="blackicon" />
                        <input className="submitbutton" type="submit" value="Submit" />
                    </form>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
};

export default ResetPassword;
