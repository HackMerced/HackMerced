import React, { Component } from 'react';
import "../../assets/css/signUp.css";

// var FontAwesome = require('react-fontawesome');

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
      myAllergies: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(EventTarget) {
    this.setState({ [EventTarget.target.name] : EventTarget.target.value });
  }

  handleSubmit(EventTarget) {
    alert('Your application was submitted!');
    EventTarget.preventDefault();
  }

  render() {
    return (
      <signup>
        <h2>Hacker Sign-Up Form</h2>
        <div className="columns is-centered">
          <div className="column is-4-desktop">
            <form class="box" onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label" >Name: </label>
                <input className="inputh" name="myName" type="text" onChange={this.handleInputChange} />
              </div>
              <div className="field">
                <label className="label">Email: </label>
                <input className="inputh" name="myEmail" type="text" onChange={this.handleInputChange} />
              </div>
              <div className="field">
                <label className="label">Phone Number: </label>
                <input className="inputh" name="myPhone" type="text" onChange={this.handleInputChange} />
              </div>
              <div className="field">
                <label className="label">School: </label>
                <input className="inputh" name="mySchool" type="text" onChange={this.handleInputChange} />
              </div>
              <div className="field">
                <label className="label">Age: </label>
                <input className="inputh" name="myAge" type="number" onChange={this.handleInputChange} />
              </div> 
              <div className="field">
                <label className="label">Gender: </label>
                <input className="inputh" name="myGender" type="text" onChange={this.handleInputChange} />
              </div>
                <label className="label">Shirt Size: </label>
                <input className="inputh" name="myShirt" type="text" onChange={this.handleInputChange} />
                <label className="label">Dietary Restrictions: </label>
                <input className="inputh" name="myDiet" type="text" onChange={this.handleInputChange} />  
              <label className="label">Allergies </label>
                <input className="inputh" name="myAllergies" type="text" onChange={this.handleInputChange} />
              <label>
                Submit Your Resume
                <input type="file" />
              </label>
              <br />
              <input className="button is-success" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </signup>
    );
  }
}

export default SignUpHacker;
