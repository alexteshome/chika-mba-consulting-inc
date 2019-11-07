import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Button,
  Image
} from "semantic-ui-react";
import banner from "../../../images/image2.png";
import _ from "lodash";

const MobileContainer = props => {
  const {
    children,
    getWidth,
    items,
    handleSidebarHide,
    handleToggle,
    sidebarOpened
  } = props;

  return (
    <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={800}>
      <Sidebar
        as={Menu}
        animation="push"
        direction="right"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        {/* {isAuthenticated ? (
          <Menu.Item
            as={Link}
            header
            onClick={handleSidebarHide}
            content="Profile"
            name="profile"
            to="/profile"
          />
        ) : null} */}
        {_.map(items, item => (
          <Menu.Item
            name={item.key}
            onClick={handleSidebarHide}
            header
            as={Link}
            {...item}
          />
        ))}
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: 900 }}>
        <Segment
          inverted
          textAlign="center"
          vertical
          style={{ padding: "3 3" }}
        >
          <Menu inverted pointing secondary size="huge">
            <Segment vertical color="white" basic style={{ padding: 10 }}>
              <Image src={banner} centered size="small" href="/home" />
            </Segment>
            {/* <Menu.Item position="right" style={{ paddingRight: 10 }}>
              <AuthButton />
            </Menu.Item> */}
            <Menu.Item position="right" onClick={handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
  getWidth: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  //sidebarItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSidebarHide: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool
};

export default MobileContainer;
