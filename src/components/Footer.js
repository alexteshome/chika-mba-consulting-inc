import React, { Component } from "react";
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Input
} from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        style={{ padding: "3em 0em", backgroundColor: "#084166" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable verticalAlign="middle">
            <Grid.Column textAlign="left" width={3}>
              <List inverted link>
                <List.Item as="a" href="/about">
                  About Us
                </List.Item>
                <List.Item as="a" href="/contact">
                  Contact Us
                </List.Item>
                <List.Item as="a" href="#">
                  Terms & Conditions
                </List.Item>
                <List.Item as="a" href="#">
                  Privacy Policy
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <List link inverted size="large">
                <List.Item as="a">
                  <List.Icon name="facebook f" style={{ color: "white" }} />
                  Facebook
                </List.Item>
                <List.Item as="a">
                  <List.Icon name="twitter" style={{ color: "white" }} />
                  Twitter
                </List.Item>
                <List.Item as="a">
                  <List.Icon name="instagram" style={{ color: "white" }} />
                  Instagram
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h5" content="Subscribe to our newsletter" />
              <Input action={"OK"} placeholder="Email Address" />
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
              <List>
                <List.Item>(416) 835-1373</List.Item>
                <List.Item>info@cmbaconsulting.ca</List.Item>
                <List.Item>Ottawa, ON, Canada</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
