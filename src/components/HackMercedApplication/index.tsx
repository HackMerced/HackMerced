import React, { FC, useState } from "react";
import Axios from "axios";
import SelectSearch from "react-select-search";
import { ToastContainer, toast } from "react-toastify";
import { css } from "@emotion/core";
import { PulseLoader } from "react-spinners";

import FileUploader from "../FileUploader";
import { universities } from "./universities";
import { states } from "./states";
import { countries } from "./countries";
import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Application: FC = (): JSX.Element => {
    const [canSubmit, setCanSubmit] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [location, setLocation] = useState<any>();
    const [university, setUniversity] = useState<any>();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        levelOfStudy: "",
        gender: "",
        race: "",
        howDidYourHearAboutUs: "",
        firstHackathon: "",
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const success = () =>
        toast("Successful! 🎉 We have received your application.", {
            position: "top-right",
            autoClose: 10000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    const error = () =>
        toast(
            "Sorry! You have already submitted your application. Think its an error? Contact us on our Contact Page.",
            {
                position: "top-right",
                autoClose: 10000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            },
        );

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setIsLoading(true);
        setCanSubmit(false);

        Axios.post(`https://Hackmerced-tomoe.herokuapp.com/v1/Hack-merced/apply`, {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            dateOfBirth: form.dateOfBirth,
            university: university,
            levelOfStudy: form.levelOfStudy,
            gender: form.gender,
            race: form.race,
            stateOrCountry: location,
            howDidYourHearAboutUs: form.howDidYourHearAboutUs,
            firstHackathon: form.firstHackathon,
        })
            .then(() => {
                setIsLoading(false);
                success();

                Axios.post(`https://Hackmerced-myriagon.herokuapp.com/v1/zoho/applied`, {
                    email: form.email,
                });

                Axios.post(`https://Hackmerced-myriagon.herokuap.com/v1/mailchimp/subscribe`, {
                    email_address: form.email,
                    merge_fields: {
                        FNAME: form.firstName,
                        LNAME: form.lastName,
                    },
                });
            })
            .catch(() => {
                setIsLoading(false);
                error();
            });
    };

    return (
        <>
            <main className="dashboard-application">
                <h3>Application</h3>
                <form className="application-form" onSubmit={handleSubmit}>
                    <section className="row">
                        <div className="cell left-cell ">
                            <label htmlFor="firstName">
                                First Name <span className="required">*</span>
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="lastName">
                                Last Name <span className="required">*</span>
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="Email">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="birthday">
                                Birthday <span className="required">*</span>
                            </label>
                            <input
                                id="birthday"
                                name="dateOfBirth"
                                type="date"
                                placeholder="Birthday"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="university">University</label>
                            <SelectSearch
                                id="university"
                                className="select-search"
                                onChange={setUniversity}
                                options={universities}
                                search
                                placeholder="Select your university"
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="levelOfStudy">
                                Current Level of Study <span className="required">*</span>
                            </label>
                            <select
                                id="levelOfStudy"
                                name="levelOfStudy"
                                onChange={handleInputChange}
                                required
                                defaultValue=""
                            >
                                <option value="" disabled={true}>
                                    Current Level of Study
                                </option>
                                <option value="High School">High School</option>
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                                <option value="Graduate">Graduate</option>
                            </select>
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell">
                            <label htmlFor="gender">
                                Gender <span className="required">*</span>
                            </label>
                            <select id="gender" name="gender" onChange={handleInputChange} required defaultValue="">
                                <option value="" disabled={true}>
                                    Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="race">
                                Race <span className="required">*</span>
                            </label>
                            <select id="race" name="race" onChange={handleInputChange} required defaultValue="">
                                <option value="" disabled={true}>
                                    Race
                                </option>
                                <option value="American Indian or Alaskan Native">
                                    American Indian or Alaskan Native
                                </option>
                                <option value="Asian/Pacific Islander">Asian/Pacific Islander</option>
                                <option value="Black or African American">Black or African American</option>
                                <option value="Latino">Latino</option>
                                <option value="White/Caucasian">White/Caucasian</option>
                                <option value="Prefer not to answer">Prefer not to answer</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </section>
                    <section className="row">
                        <div className="cell left-cell ">
                            <label htmlFor="firstName">
                                Current Major <span className="required">*</span>
                            </label>
                            <input
                                id="major"
                                name="major"
                                type="text"
                                placeholder="Major"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="cell right-cell">
                            <label htmlFor="tShirtSize">
                                T-Shirt Size <span className="required">*</span>
                            </label>
                            <input
                                id="tShirtSize"
                                name="tShirtSize"
                                type="text"
                                placeholder="Size"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="long-questions">
                        <label htmlFor="stateOrCountry">
                            If you live in the US, what state do you currently live in? If you do not reside within the
                            US, what country are you from? <span className="required">*</span>
                        </label>
                        <SelectSearch
                            id="stateOrCountry"
                            className="select-search"
                            onChange={setLocation}
                            options={[...states, ...countries]}
                            value={location}
                            search
                            placeholder="Select your state or country"
                        />
                    </section>
                    <section className="long-questions">
                        <label htmlFor="howDidYourHearAboutUs">How did you hear about HackMerced?</label>
                        <select
                            id="howDidYourHearAboutUs"
                            name="howDidYourHearAboutUs"
                            placeholder="How did you hear about HackMerced?"
                            onChange={handleInputChange}
                            defaultValue=""
                        >
                            <option value="" disabled={true}>
                                Select
                            </option>
                            <option value="Social Media">Social Media</option>
                            <option value="Friends">Friends</option>
                            <option value="Family">Family</option>
                            <option value="University Postings">University Postings</option>
                            <option value="Other">Other</option>
                        </select>
                    </section>
                    <section className="long-questions">
                        <label htmlFor="firstHackathon">
                            Will HackMerced be your first Hackathon? <span className="required">*</span>
                        </label>
                        <select
                            id="firstHackathon"
                            name="firstHackathon"
                            placeholder="Will HackMerced be your first Hackathon?"
                            onChange={handleInputChange}
                            required
                            defaultValue=""
                        >
                            <option value="" disabled={true}>
                                Select
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </section>
                    {
                        <section className="row">
                            <div className="cell left-cell">
                                <label htmlFor="resume">
                                    <span className="required"></span>
                                </label>
                                <FileUploader id="resume" className="file-submission" name="resume">
                                    File Upload
                                </FileUploader>
                            </div>
                        </section>
                    }
                    <button className="submit-application" type="submit" disabled={!canSubmit}>
                        {isLoading ? (
                            <PulseLoader css={override} size={15} color={"#B486CE"} loading={isLoading} />
                        ) : canSubmit ? (
                            "SUBMIT"
                        ) : (
                            "SUBMITTED"
                        )}
                    </button>
                </form>
            </main>
            <ToastContainer />
        </>
    );
};

export default Application;
