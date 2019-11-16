import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Grid,
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react";

const Home = props => {
  return (
    <div>
      <Segment basic style={{ paddingTop: "5.5em" }} vertical>
        <Container>
          <Header as="h1" style={{ fontSize: "3em", color: "#084166" }}>
            Solutions & Services Focused to Meet Your Needs
          </Header>
          <p style={{ fontSize: "1.33em", margin: "1em 0em 2em 0em" }}>
            At Chika Mba Consulting Inc., knowledge fuels strategy and knowledge
            is power. Our industry-leading expertise & customer-centric approach
            is what makes us easier to do business with. We help you evolve and
            make informed decisions with technology. We will ensure dexterity
            and scalability for future technological advances.
          </p>
          <Button
            as={Link}
            to="/about"
            color="blue"
            size="large"
            onClick={() => props.setActiveTab("about")}
          >
            Read More
          </Button>
        </Container>
      </Segment>

      <Segment textAlign="center" vertical style={{ paddingBottom: "5em" }}>
        <Divider
          as="h1"
          className="header"
          horizontal
          style={{ paddingBottom: "1.5em", paddingTop: "1em" }}
        >
          <Header
            style={{
              color: "#084166"
            }}
          >
            Why Choose Us?
          </Header>
        </Divider>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "4em" }}>
              <Icon
                inverted
                circular
                color="blue"
                name="dollar sign"
                size="large"
              />
              <Header as="h3" style={{ fontSize: "2em", color: "#084166" }}>
                Competitive Pricing
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                With our direct sourcing capabilities, we're able to provide you
                with the best of both, pricing & service!
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em" }}>
              <Icon inverted circular color="blue" name="list" size="large" />
              <Header as="h3" style={{ fontSize: "2em", color: "#084166" }}>
                Great Selection
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                With our expanded line of products, we're able to provide you
                with a one-stop shop for all your needs.
              </p>
            </Grid.Column>

            <Grid.Column style={{ paddingBottom: "5em" }}>
              <Icon
                inverted
                circular
                color="blue"
                name="add user"
                size="large"
              />
              <Header as="h3" style={{ fontSize: "2em", color: "#084166" }}>
                Expert Advice
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                If you have a question, we'll get you the answer quick & easy.
                Live Chat, Email & Telephone.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Home;
