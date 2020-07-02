import React, { Component } from 'react';
import Axios from 'axios';

import './Form.scss';

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    };

    constructor(props: Readonly<{}>) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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

    resetForm() {
        this.setState({ name: '', email: '', message: '' });
    }

    render(): JSX.Element {
        const { name, email, message } = this.state;
        return (
            <form className="splash-form" onSubmit={this.handleSubmit}>
                <h3>Message Us</h3>
                <input
                    placeholder="Full Name"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({ name: event.target.value });
                    }}
                />
                <input
                    placeholder="Email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({ email: event.target.value });
                    }}
                />
                <textarea
                    placeholder="Message"
                    rows={5}
                    value={message}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                        this.setState({ message: event.target.value });
                    }}
                />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default Form;
