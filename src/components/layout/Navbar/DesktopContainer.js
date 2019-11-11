import React, { useState } from "react";
// import Subscription from "../../pages/Subscription";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import banner from "../../../images/image2.png";
import {
  Container,
  Menu,
  Segment,
  Sidebar,
  Responsive,
  Image,
  Visibility
} from "semantic-ui-react";
import _ from "lodash";

const DesktopContainer = props => {
  const [fixed, showFixedMenu] = useState(false);

  const { children, getWidth, items, setActiveTab, activeTab } = props;

  /* const RenderDropdown = items =>
    items.map(item => (
      <Dropdown.Item key={item.text}>
        {item.subList ? (
          <Dropdown text={item.text}>
            <Dropdown.Menu>{RenderDropdown(item.subList)}</Dropdown.Menu>
          </Dropdown>
        ) : (
          item.text
        )}
      </Dropdown.Item>
    )); */
  return (
    <Responsive getWidth={getWidth} minWidth={0}>
      <Segment vertical basic style={{ padding: 20 }}>
        <Image
          as={Link}
          src={banner}
          size="large"
          to="/home"
          onClick={() => setActiveTab("home")}
        />
      </Segment>
      <Visibility
        once={false}
        onTopPassed={() => {
          showFixedMenu(true);
        }}
        onTopPassedReverse={() => {
          showFixedMenu(false);
        }}
      >
        <Segment
          vertical
          inverted
          basic
          style={{ padding: 0, backgroundColor: "#084166" }}
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted
            borderless
            size="massive"
            widths={3}
            style={{ backgroundColor: "#084166" }}
          >
            <Container>
              {/* {dropdownItems.map(item => {})}
            <Dropdown text="Products" pointing className="link item">
              <Dropdown.Menu>{RenderDropdown(dropdownItems)}</Dropdown.Menu>
            </Dropdown>
             <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>
                  <Dropdown text="Computers">
                    <Dropdown.Menu>
                      <Dropdown.Item>AIDC/POS</Dropdown.Item>
                      <Dropdown.Item>All-In-Onene</Dropdown.Item>
                      <Dropdown.Item>Barebone Systems</Dropdown.Item>
                      <Dropdown.Item>Desktop Computers</Dropdown.Item>
                      <Dropdown.Item>Notebooks</Dropdown.Item>
                      <Dropdown.Item>Servers</Dropdown.Item>
                      <Dropdown.Item>Tablets</Dropdown.Item>
                      <Dropdown.Item>Terminals/Thin Clients</Dropdown.Item>
                      <Dropdown.Item>Workstations</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Components">
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        Computer Monitors & Displays
                      </Dropdown.Item>
                      <Dropdown.Item>Cooling Devices</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Accessories">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                      <Dropdown.Item>Pants</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Software">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                      <Dropdown.Item>Pants</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Network">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                      <Dropdown.Item>Pants</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Multimedia">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                      <Dropdown.Item>Pants</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
              </Dropdown.Menu> 
              </Dropdown>*/}

              {_.map(items, item => (
                <Menu.Item
                  as={Link}
                  name={item.key}
                  style={{
                    paddingBottom: 16.571,
                    paddingLeft: 50,
                    paddingRight: 50
                  }}
                  active={item.key === activeTab}
                  onClick={() => setActiveTab(item.key)}
                  {...item}
                />
              ))}

              {/* <Menu.Item position="right">
              <Icon link size="large" inverted name="instagram" />
            </Menu.Item>
            <Menu.Item>
              <Icon link size="large" inverted name="twitter" />
            </Menu.Item>
            <Menu.Item>
              <Icon link size="large" inverted name="facebook f" />
            </Menu.Item> */}
            </Container>
            {/* {isAuthenticated ? (
            <Menu.Item>
              <Link to="/profile">
                <Icon
                  link={active !== "profile"}
                  inverted
                  name="user"
                  size="large"
                  onClick={() => setActiveTab("profile")}
                />
              </Link>
            </Menu.Item>
          ) : null} */}
            {/* <Menu.Item style={{ padding: 10 }}>
            <AuthButton />
          </Menu.Item> */}

            {/* <Menu.Item style={{ padding: 10 }}>
            <Subscription />
          </Menu.Item> */}

            {/* <Menu.Item onClick={handleToggle}>
            <Icon name="sidebar" size="large" />
          </Menu.Item> */}
          </Menu>
        </Segment>
      </Visibility>
      {/* Sidebar Component */}
      <Sidebar.Pushable style={{ minHeight: 641 }}>
        {/* <Sidebar
          as={Menu}
          animation="overlay"
          color="blue"
          direction="right"
          inverted
          borderless
          size="large"
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          {_.map(sidebarItems, item => (
            <Menu.Item
              onClick={handleSidebarHide}
              as={Link}
              style={sidebarStyle}
              {...item}
            />
          ))}
        </Sidebar> */}
        <Sidebar.Pusher>{children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </Responsive>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
  getWidth: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSidebarHide: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool
};

/* const dropdownItems = [
   {
    text: "Computers",
    subList: [
      {
        text: "AIDC/POS",
        subList: [{ text: "Pole Displays" }, { text: "RFID Readers" }]
      },
      { text: "All-In-One", subList: [{ text: "Desktop Computers" }] },
      { text: "Barebone Systems" },
      { text: "Desktop Computers" },
      { text: "Notebooks" },
      { text: "Servers", subList: [{ text: "Entry-level Servers" }] },
      { text: "Tablets" },
      { text: "Terminals/Thin Clients" },
      { text: "Workstations" }
    ]
  },
  {
    text: "Components",
    subList: [
      {
        text: "Computer Monitors & Displays",
        subList: [{ text: "Computer Displays" }]
      },
      { text: "Cooling Devices", subList: [{ text: "PC Fans/Heat Sinks" }] },
      {
        text: "Memory",
        subList: [
          { text: "Cache Memory" },
          { text: "Memory Cards" },
          { text: "Memory Expansion Boards" },
          { text: "RAM Modules" },
          { text: "ROM Modules" }
        ]
      },
      { text: "Microprocessors" },
      { text: "Motherboards" },
      { text: "Power Supplies" },
      {
        text: "Printers",
        subList: [
          { text: "Dot Matrix Printers" },
          { text: "Label/Receipt Printers" },
          { text: "Laser & Inkjet Printers" },
          { text: "Multifunction Printers" }
        ]
      },
      { text: "Projection Screens" },
      {
        text: "Scanning Devices",
        subList: [{ text: "3D Scanners" }, { text: "Scanners" }]
      },
      {
        text: "Storage Components",
        subList: [
          { text: "Flash Devices" },
          { text: "Hard Drive Duplicators" },
          { text: "Hard Drives/Solid State Drives" },
          { text: "I/O & Storage Controllers" },
          { text: "NAS Devices" },
          { text: "Optical Drives" },
          { text: "Removable Drives" },
          { text: "SAN Devices" },
          { text: "Storage Autoloaders & Libraries" },
          { text: "Storage Media" }
        ]
      },
      {
        text: "Video Cards",
        subList: [
          { text: "Graphic Cards" },
          { text: "Video Processing/Capturing Modules" }
        ]
      }
    ]
  } 
];*/
export default DesktopContainer;
