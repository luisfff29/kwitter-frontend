import React from "react";
import {
  Menus,
  ProfileCard,
  ProfileMessages,
  ThisIsTheBottom
} from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <div
          style={{
            padding: "0 10%",
            display: "flex",
            alignItems: "flex-start"
          }}
        >
          <ProfileCard />
          <ProfileMessages />
        </div>
        <ThisIsTheBottom />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
