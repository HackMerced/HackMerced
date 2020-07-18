import React, { FC, useState } from 'react';
import Axios from 'axios';

import './Form.scss';
import { FormProps } from './Form.types';

const Form: FC<FormProps> = (props): JSX.Element => {
    const { formTitle, askCompany, formRequest } = props;
    const [values, setValues] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const { name, email, company, message } = values;

        Axios({
            method: 'POST',
            url: `https://hackmerced-myriagon.herokuapp.com/v1/zoho/${formRequest}-us`,
            data: company === '' ? { name, email, message } : { name, email, company, message },
        }).then(response => {
            const { status } = response.data;
            if (status === 'success') resetForm();
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const resetForm = (): void => {
        setValues({ name: '', company: '', email: '', message: '' });
    };

    return (
        <form className="splash-form" onSubmit={handleSubmit}>
            <h3>{formTitle}</h3>
            <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    required
                    placeholder="Full Name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                />
            </div>
            {askCompany ? (
                <div className="input-wrapper">
                    <label htmlFor="company">Company</label>
                    <input
                        id="company"
                        required
                        placeholder="Company Name"
                        name="company"
                        value={values.company}
                        onChange={handleInputChange}
                    />
                </div>
            ) : null}
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    required
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    required
                    placeholder="Message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default Form;
