import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import PropTypes from "prop-types";

let items = [
  {
    content: "Home",
    key: "home",
    to: "/home"
  },
  { content: "About", key: "about", to: "/about" },
  {
    content: "Contact Us",
    key: "contact",
    to: "/contact"
  }
];

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class ResponsiveContainer extends Component {
  state = {
    activeItem:
      this.props.location.pathname.substr(1) === ""
        ? "home"
        : this.props.location.pathname.substr(1)
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { children } = this.props;
    const { sidebarOpened, activeItem } = this.state;

    const containerProps = {
      getWidth: getWidth,
      items: items,

      handleSidebarHide: this.handleSidebarHide,
      handleToggle: this.handleToggle,
      sidebarOpened: sidebarOpened,
      setActiveTab: this.handleItemClick,
      active: activeItem
    };
    // const childrenWithProps = React.Children.map(children, child =>
    //   React.cloneElement(child, { setActiveTab: this.handleItemClick })
    // );
    return (
      <div>
        <DesktopContainer {...containerProps}>{children}</DesktopContainer>
        <MobileContainer {...containerProps}>{children}</MobileContainer>
      </div>
    );
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default withRouter(ResponsiveContainer);
