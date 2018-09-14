import React, { Component } from 'react';
import logo from "../assets/img/logo.png";
var FontAwesome = require('react-fontawesome');

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myEmail: '',
            myPassword: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(EventTarget) {
       this.setState({ [EventTarget.target.name] : EventTarget.target.value});
    }

    handleSubmit(EventTarget) {
        alert('LOGGED IN!!!');
        EventTarget.preventDefault();
    }
    render() {
        return (
            <section className = "hero is-primary is-fullheight">
                <div className = "hero-body">
                    <div className = "container">
                        <div className = "columns is-centered">
                            <div className = "column is-4">
                                <form className = "box" onSubmit={this.handleSubmit}>
                                    <div className = "field has-text-centered">
                                        <img src = {logo} alt ="" style ={{height: 200, width: 200}}/>

                                    </div>

                                    <div className = "field">
                                        <label>Email</label>
                                            <div className = "control has-icons-left">
                                                <input name = "myEmail" className = "input" type = "email" placeholder = "Enter Email"/>
                                                    <span className = "icon is-small is-left">
                                                        <FontAwesome className = "fa-envelope"/>
                                                    </span>
                                            </div>
                                    </div>

                                    <div className = "field">
                                        <label>Password</label>
                                            <div className = "control has-icons-left">
                                                <input name = "myPassword" className = "input" type = "password" placeholder = "Enter Password"/>
                                                    <span className = "icon is-small is-left">
                                                        <FontAwesome className = "fa-lock"/>
                                                    </span>
                                            </div>
                                    </div>

                                    <div className = "field">
                                        <button className = "button is-info is-outlined" type="submit" value = "Submit">
                                            Login
                                        </button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

         );
    }
}

export default LogIn;
