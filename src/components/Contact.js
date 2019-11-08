import React from "react";
import { Segment, Item, Label, List } from "semantic-ui-react";

const Contact = () => (
  <Segment
    vertical
    basic
    textAlign="center"
    padded
    style={{
      paddingTop: "5em"
    }}
  >
    <Item>
      <Item.Content>
        <Item.Header as="h1" style={{ fontSize: "4em", color: "#084166" }}>
          Contact Us
        </Item.Header>

        <Item.Description>
          <List size="massive">
            <List.Item>314 Mykonos Crescent</List.Item>
            <List.Item>Ottawa, ON K2S 0P1</List.Item>
            <List.Item>(416) 835-1373</List.Item>
            <List.Item href="mailto:info@cmbaconsulting.ca">
              info@cmbaconsulting.ca
            </List.Item>
          </List>
        </Item.Description>
      </Item.Content>
    </Item>
  </Segment>
);

export default Contact;
