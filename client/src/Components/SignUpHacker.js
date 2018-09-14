import React, { Component } from 'react';
import "../assets/css/signUp.css";
//var FontAwesome = require('react-fontawesome');

class SignUpHacker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: '',
            myEmail: '',
            myPhone: '',
            mySchool: '',
            myAge: '',
            myGender: '',
            myShirt: '',
            myDiet: '',
            myAllergies: '',

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(EventTarget) {
       this.setState({ [EventTarget.target.name] : EventTarget.target.value});
    }

    handleSubmit(EventTarget) {
        alert('Your application was submitted!');
        EventTarget.preventDefault();
    }

    render() {
        return (
        <signup>
            <center><span className = "title1">Hacker Sign-Up Form</span></center>
            <br/>
                <div className = "columns is-centered">
                    <div className = "column is-4-desktop">

                            <form className = "box"  onSubmit={this.handleSubmit}>
                                <div className = "field">
                                    <label className = "label" >Name: </label>
                                    <input  className = "input" name="myName" type="text" onChange={this.handleInputChange} />
                                </div>

                                <div className = "field">
                                    <label className = "label">Email: </label>
                                    <input className = "input" name="myEmail" type="text" onChange={this.handleInputChange} />
                                </div>

                                <div className = "field">
                                    <label className = "label">Phone Number: </label>
                                    <input className = "input" name="myPhone" type="text" onChange={this.handleInputChange} />
                                </div>

                                <div className = "field">
                                    <label className = "label">School: </label>
                                    <input className = "input" name="mySchool" type="text" onChange={this.handleInputChange} />
                                </div>

                               <div className = "columns">
                                    <div className = "column is-6">
                                        <div className = "field">
                                            <label className = "label">Age: </label>
                                            <input className = "input" name="myAge" type="number" onChange={this.handleInputChange} />
                                        </div>
                                    </div>

                                    <div className = "column is-6">
                                        <div className = "field">
                                            <label className = "label">Gender: </label>
                                            <input className = "input" name="myGender" type="text" onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>


                                    <label className = "label">Shirt Size: </label>
                                    <input className = "input" name="myShirt" type="text" onChange={this.handleInputChange} />


                                    <label className = "label">Dietary Restrictions: </label>
                                    <input className = "input" name="myDiet" type="text" onChange={this.handleInputChange} />


                                <label className = "label">Allergies </label>
                                    <input className = "input" name="myAllergies" type="text" onChange={this.handleInputChange} />

                                <label>
                                    Show me yo Resume
                                    <input type="file" />
                                </label>
                                <br />
                                <input  className = "button is-success" type="submit" value="Submit" />
                            </form>
                    </div>
                </div>

        </signup>

        );
    }
}

export default SignUpHacker ;
