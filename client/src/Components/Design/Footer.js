import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//IMPORT SEMANTIC UI
import {Divider, Container, Grid, Icon, Header} from "semantic-ui-react";

//IMPORT OF REACT COMPONENT FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faQuestion, faStop } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faQuestion, faStop);

class Footer extends Component {
  render() {
    return (
      <footer className = "footer">
          <Container>
            <Grid columns = "equal" position = "center">
               <Grid.Column>
                <FontAwesomeIcon icon="envelope" size="2x"/>
                <Link id="underline" to="/contactus">
                    <span className = "footerText">Contact Us</span>
                </Link>
              </Grid.Column>
               <Grid.Column>
                <FontAwesomeIcon icon="question" size="2x"/>
                <Link id="underline" to="/faqs">
                  <span className = "footerText">FAQs</span>
                </Link>
              </Grid.Column>
               <Grid.Column>
                <FontAwesomeIcon icon="stop" size="2x"/>
                <Link id="underline" to="/Volunteer">
                  <span className = "footerText">Volunteers</span>
                </Link>
              </Grid.Column>
            </Grid>
          </Container>
      </footer>

    );
  }
}

export default Footer;