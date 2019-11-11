import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Image
} from "semantic-ui-react";
import banner from "../../../images/image2.png";
import _ from "lodash";
// Not currently used
const MobileContainer = props => {
  const {
    children,
    getWidth,
    items,
    handleSidebarHide,
    handleToggle,
    setActiveTab,
    sidebarOpened
  } = props;

  return (
    <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={0}>
      <Sidebar
        as={Menu}
        animation="push"
        direction="right"
        style={{ backgroundColor: "#084166" }}
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
            style={{ color: "white" }}
            onClick={handleSidebarHide}
            header
            as={Link}
            {...item}
          />
        ))}
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: 900 }}>
        <Segment basic textAlign="center" vertical style={{ paddingBottom: 0 }}>
          <Menu secondary size="huge">
            <Image
              as={Link}
              src={banner}
              size="medium"
              to="/home"
              style={{ padding: "0px 0px 20px 20px" }}
              onClick={() => setActiveTab(null, { name: "home" })}
            />
            {/* <Menu.Item position="right" style={{ paddingRight: 10 }}>
              <AuthButton />
            </Menu.Item> */}
            <Menu.Item position="right" onClick={handleToggle} size="huge">
              <Icon name="sidebar" size="large" />
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
