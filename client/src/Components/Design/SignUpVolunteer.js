import React, { Component } from 'react';

class SignUpVolunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: '',
      myEmail: '',
      myPhone: '',
      mySchool: '',
      myAge: '',
      myGender: '',
      myShirt: ''
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
        <h2>Volunteer Sign-Up Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="myName" type="text" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input name="myEmail" type="text" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input name="myPhone" type="text" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            School:
            <input name="mySchool" type="text" onChange={this.handleInputChange} />
          </label>
          <br />
          <label> 
            Age:
            <input name="myAge" type="number" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Gender:
            <input name="myGender" type="text" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Shirt Size:
            <input name="myShirt" type="text" onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value = "Submit" />
        </form>
      </signup>
    );
  }
}

export default SignUpVolunteer;
