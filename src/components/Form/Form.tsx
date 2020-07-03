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

    private constructor(props: Readonly<FormProps>) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
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

    private resetForm(): void {
        const reset = !this.props.askCompany
            ? { name: '', email: '', message: '' }
            : { name: '', company: '', email: '', message: '' };
        this.setState(reset);
    }

    public render(): JSX.Element {
        const { name, email, message } = this.state;
        const { formTitle, askCompany } = this.props;

        return (
            <form className="splash-form" onSubmit={this.handleSubmit}>
                <h3>{formTitle}</h3>
                <div className="input-wrapper">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        required
                        placeholder="Full Name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            this.setState({ name: event.target.value });
                        }}
                    />
                </div>
                {askCompany ? (
                    <div className="input-wrapper">
                        <label htmlFor="company">Company</label>
                        <input
                            id="company"
                            required
                            placeholder="Company Name"
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                this.setState({ name: event.target.value });
                            }}
                        />
                    </div>
                ) : null}
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            this.setState({ email: event.target.value });
                        }}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="message">Message</label>
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
                </div>
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default Form;
