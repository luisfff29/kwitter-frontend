import React, { Component } from "react";
import { Link } from ".";
import { withAsyncAction, connect } from "../HOCs";
import { Sidebar, Menu, Icon } from "../components";

class Menus extends Component {
  handleLogout = (event) => {
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
      >
        <Link to="/feed">
          <h1
            style={{
              fontFamily: "Bangers",
              fontSize: "50px",
              margin: "10px",
            }}
          >
            Kwitter
          </h1>
        </Link>
        {this.props.isAuthenticated && (
          <div style={{ display: "flex", margin: "auto 0 auto auto" }}>
            <Link to="/feed">
              <Menu.Item>
                <Icon name="home" />
                Home
              </Menu.Item>
            </Link>
            <Link to={"/profile/" + this.props.username}>
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

const mapStateToProps = (state) => {
  return {
    username: state.auth.login.result && state.auth.login.result.username,
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("auth", "logout")(Menus)
);
