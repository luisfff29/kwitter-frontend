import React from "react";
import { Link } from ".";
import { withAsyncAction } from "../HOCs";
import { Sidebar, Menu, Icon } from "../components";

class Menus extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <Sidebar
        as={Menu}
        direction="top"
        icon="labeled"
        inverted
        visible
        width="thin"
        style={{ backgroundColor: "#171725" }}
      >
        <h1
          style={{
            fontFamily: "Bangers",
            fontSize: "50px",
            backgroundColor: "#171725",
            color: "white",
            margin: "10px"
          }}
        >
          Kwitter
        </h1>
        {this.props.isAuthenticated && (
          <div style={{ display: "flex", margin: "auto 0 auto auto" }}>
            <Link to="/feed">
              <Menu.Item>
                <Icon name="home" />
                Home
              </Menu.Item>
            </Link>
            <Link to="/profile/getUser">
              <Menu.Item>
                <Icon name="user" />
                Profile
              </Menu.Item>
            </Link>
            <Link to="/users">
              <Menu.Item>
                <Icon name="address book" />
                Users
              </Menu.Item>
            </Link>
            <Link to="/messagefeed">
              <Menu.Item>
                <Icon name="comments" />
                Message Feed
              </Menu.Item>
            </Link>
            <Link to="/" onClick={this.handleLogout}>
              <Menu.Item>
                <Icon name="sign out" />
                Logout
              </Menu.Item>
            </Link>
          </div>
        )}
      </Sidebar>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menus);
