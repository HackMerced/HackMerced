import React, { Component } from 'react';

//IMPORT AXIOS
import axios from "axios";

//IMPORT SEMANTIC-UI
import {Container, Button, Form, Select} from "semantic-ui-react";

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
    this.setState({ [EventTarget.target.name] : EventTarget.target.value });
  }

  handleSubmit(EventTarget) {
    alert('LOGGED IN!!!');
    EventTarget.preventDefault();

    const log = {
      email: this.state.email,
      password: this.state.password
    }
    
    axios.post("http://localhost:3000/", {log})
    .then(res =>{
      console.log(res.data);
    })
  }

  render() {
    return (
      <Container text>
          <center><h2>Log In</h2></center>
          <Form onSubmit={ this.handleSubmit }>
                  <Form.Field>
                    <label>Email</label>
                    <input name="myEmail" className="input" type="email" placeholder="Enter Email"/>
                    <span className="icon is-small is-left">
                      <FontAwesome className="fa-envelope"/>
                    </span>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                      <input name="myPassword" className="input" type="password" placeholder="Enter Password"/>
                      <span className="icon is-small is-left">
                        <FontAwesome className="fa-lock"/>
                      </span>
                    </Form.Field>
                  <Form.Field>
                    <button className="button is-info is-outlined" type="submit" value="Submit">Login</button>
                  </Form.Field>
          </Form>
          <br/>
      </Container>
    );
  }
}

export default LogIn;
