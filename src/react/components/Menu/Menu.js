import React, { Component } from "react";
import { Link } from "../../components";
import { withAsyncAction, connect } from "../../HOCs";
import { Sidebar, Menu, Icon, Responsive, Backdrop } from "../../components";
import "./Menu.css";

class Menus extends Component {
  state = { show: false };

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  showSidebar = () => {
    this.setState({ show: true });
  };

  hideSidebar = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Responsive {...Responsive.onlyMobile}>
          <Backdrop show={this.state.show} clicked={this.hideSidebar} />
          <Sidebar
            className="Sidebar"
            as={Menu}
            animation="overlay"
            direction="right"
            inverted
            vertical
            visible={this.state.show}
            icon="labeled"
            width="thin"
          >
            <Link to="/feed">
              <Menu.Item>
                <Icon name="home" />
                Home
              </Menu.Item>
            </Link>
            <Link
              to={"/profile/" + this.props.username}
              onClick={() =>
                setTimeout(() => {
                  window.location.reload();
                }, 1)
              }
            >
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
                Messages
              </Menu.Item>
            </Link>
            <Link to="/">
              <Menu.Item>
                <Icon name="sign out" />
                Log out
              </Menu.Item>
            </Link>
          </Sidebar>
        </Responsive>
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
          <Responsive {...Responsive.onlyMobile} className="flexRight">
            <Menu.Item>
              <Icon name="sidebar" onClick={() => this.showSidebar()} />
            </Menu.Item>
          </Responsive>
          {this.props.isAuthenticated && (
            <Responsive
              minWidth={Responsive.onlyTablet.minWidth}
              className="flexRight"
            >
              <Link to="/feed">
                <Menu.Item>
                  <Icon name="home" />
                  Home
                </Menu.Item>
              </Link>
              <Link
                to={"/profile/" + this.props.username}
                onClick={() =>
                  setTimeout(() => {
                    window.location.reload();
                  }, 1)
                }
              >
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
            </Responsive>
          )}
        </Sidebar>
      </>
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
