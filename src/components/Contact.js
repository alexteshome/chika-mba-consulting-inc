import React from "react";
import axios from "axios";
import creds from "../config";
import { Form, Segment, Header, Container } from "semantic-ui-react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://chika-mba-mailer.herokuapp.com/send",
      data: { creds, ...this.state }
    }).then(response => {
      console.log(response.data);
      if (response.data.message === "success") {
        if (typeof window !== `undefined`) {
          alert("Message Sent.");
        }
        this.resetForm();
      } else if (response.data.message === "fail") {
        if (typeof window !== `undefined`) {
          alert("Message failed to send.");
        }
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Segment
          vertical
          basic
          padded
          style={{
            paddingTop: "6em",
            width: "55em"
          }}
        >
          <Header
            as="h1"
            style={{ fontSize: "4em", color: "#084166", textAlign: "center" }}
          >
            Contact Us
          </Header>
          <Form
            size="huge"
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            style={{ padding: "1em 1em 3em 1em" }}
          >
            <Form.Input
              type="text"
              fluid
              required
              label="Name"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
              //style={{ maxWidth: "23em" }}
            />
            <Form.Input
              type="email"
              label="Email address"
              required
              id="email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              //style={{ maxWidth: "23em" }}
            />
            <Form.TextArea
              rows="5"
              required
              label="Message"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
            <Form.Button size="large" primary>
              Submit
            </Form.Button>
          </Form>
        </Segment>
      </Container>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
