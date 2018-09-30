import React, { Component } from 'react';
import "../../assets/css/signUp.css";

//IMPORT AXIOS
import axios from "axios";

//IMPORT SEMANTIC-UI
import {Container, Button, Form, Select} from "semantic-ui-react";

//VALUES FOR SHIRTS
const options = [
  {key: '1', text: 'Small', value : 'small'},
  {key: '2', text: 'Medium', value : 'medium'},
  {key: '3', text: 'Large', value : 'large'},
  {key: '4', text: 'X-Large', value : 'X-Large'}
]

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

    const user = {
      myName : this.state.myName,
      myEmail : this.state.myEmail,
      myPhone : this.state.myPhone,
      mySchool : this.state.mySchool,
      myAge : this.state.myAge,
      myGender : this.state.myGender,
      myShirt : this.state.myShirt,
      myDiet : this.state.myDiet,
      myAllergies : this.state.myAllergies
    };

    axios.post("http://localhost:3000/", {user})
    .then(res =>{
      console.log(res.data);
    })
  }

  render() {
    return (
        <Container text>
          <center><h2>Hacker Sign-Up Form</h2></center>
          <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label className="label" >Name: </label>
                  <input  name="myName" type="text" onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                  <label className="label">Email: </label>
                  <input  name="myEmail" type="text" onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                  <label className="label">Phone Number: </label>
                  <input  name="myPhone" type="text" onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                  <label className="label">School: </label>
                  <input  name="mySchool" type="text" onChange={this.handleInputChange} />
                </Form.Field>

                <Form.Group widths = 'equal'>
                  <Form.Field>
                    <label className="label">Age: </label>
                    <input  name="myAge" type="text" onChange={this.handleInputChange} />
                  </Form.Field>

                  <Form.Field>
                    <label className="label">Gender: </label>
                    <input  name="myGender" type="text" onChange={this.handleInputChange} />
                  </Form.Field>

                  <Form.Field control = {Select} options = {options} label = "Shirt Size:"/>
                </Form.Group>
                  <label className="label">Dietary Restrictions: </label>
                  <input  name="myDiet" type="text" onChange={this.handleInputChange} />  
                <label className="label">Allergies </label>
                  <input  name="myAllergies" type="text" onChange={this.handleInputChange} />
                <label>
                  Submit Your Resume
                  <input type="file" />
                </label>
                <br />
                <input className="button is-success" type="submit" value="Submit" />
          </Form>
          </Container>
    );
  }
}

export default SignUpHacker;
