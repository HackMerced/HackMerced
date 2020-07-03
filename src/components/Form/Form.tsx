import React, { Component } from 'react';
import Axios from 'axios';

import './Form.scss';
import { FormProps, FormState } from './Form.types';

class Form extends Component<FormProps, FormState> {
    state = {
        name: '',
        email: '',
        company: '',
        message: '',
    };

    constructor(props: Readonly<FormProps>) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();

        Axios({
            method: 'POST',
            url: 'http://localhost:3002/send',
            data: this.state,
        }).then(response => {
            if (response.data.status === 'success') {
                alert('Message Sent.');
                this.resetForm();
            } else if (response.data.status === 'fail') {
                alert('Message failed to send.');
            }
        });
    }

    resetForm(): void {
        const reset = !this.props.askCompany
            ? { name: '', email: '', message: '' }
            : { name: '', company: '', email: '', message: '' };
        this.setState(reset);
    }

    render(): JSX.Element {
        const { name, email, message } = this.state;
        const { formTitle, askCompany } = this.props;

        return (
            <form className="splash-form" onSubmit={this.handleSubmit}>
                <h3>{formTitle}</h3>
                <div className="input-wrapper">
                    <input
                        id="name"
                        required
                        placeholder="Full Name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            this.setState({ name: event.target.value });
                        }}
                    />
                    <label htmlFor="name">user name</label>
                </div>
                {askCompany ? (
                    <div className="input-wrapper">
                        <input
                            id="company"
                            required
                            placeholder="Company Name"
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                this.setState({ name: event.target.value });
                            }}
                        />
                        <label htmlFor="company">user name</label>
                    </div>
                ) : null}
                <div className="input-wrapper">
                    <input
                        id="email"
                        required
                        placeholder="Email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            this.setState({ email: event.target.value });
                        }}
                    />
                    <label htmlFor="email">user name</label>
                </div>
                <div className="input-wrapper">
                    <textarea
                        id="message"
                        required
                        placeholder="Message"
                        rows={5}
                        value={message}
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            this.setState({ message: event.target.value });
                        }}
                    />
                    <label htmlFor="message">user name</label>
                </div>
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default Form;
