import React, { FC, useState } from "react";
import Axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const Form: FC<{
    formTitle: string;
    askCompany: boolean;
    formRequest: string;
}> = (props): JSX.Element => {
    const { formTitle, askCompany, formRequest } = props;
    const [isDisabled, setIsDisabled] = useState(false);
    const [submitText, setSubmitText] = useState<JSX.Element | string>("Send");
    const [values, setValues] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    // Handle the submission of the form
    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const { name, email, company, message } = values;

        setIsDisabled(true);
        setSubmitText(<FontAwesomeIcon icon={faSyncAlt} className="fa fa-spinner" />);

        const status = await Axios({
            method: "POST",
            url: `https://hackmerced-myriagon.herokuapp.com/v1/zoho/${formRequest}-us`,
            data: company === "" ? { name, email, message } : { name, email, company, message },
        }).then((response: AxiosResponse) => {
            return response.data.status;
        });

        if (status === "success") setSubmitText("Submitted! 🎉  ");
    };

    // Handle the input fields state change
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    ): void => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form__title">{formTitle}</h3>
            <div className="form__input">
                <label htmlFor="name" className="form__input__label">
                    Name
                </label>
                <input
                    id="name"
                    required
                    placeholder="Full Name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    className="form__input__field"
                />
            </div>
            {askCompany ? (
                <div className="form__input">
                    <label htmlFor="company" className="form__input__label">
                        Company
                    </label>
                    <input
                        id="company"
                        required
                        placeholder="Company Name"
                        name="company"
                        value={values.company}
                        onChange={handleInputChange}
                        className="form__input__field"
                    />
                </div>
            ) : null}
            <div className="form__input">
                <label htmlFor="email" className="form__input__label">
                    Email
                </label>
                <input
                    id="email"
                    required
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    className="form__input__field"
                />
            </div>
            <div className="form__input">
                <label htmlFor="message" className="form__input__label">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    placeholder="Message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleInputChange}
                    className="form__input__text-area"
                />
            </div>
            <button type="submit" className="form__submit" disabled={isDisabled}>
                {submitText}
            </button>
        </form>
    );
};

export default Form;
