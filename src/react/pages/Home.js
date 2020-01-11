import React from "react";
import { userIsNotAuthenticated } from "../HOCs";
import { LoginForm } from "../components";
import "../components/DarkMode.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <h1
          style={{
            marginTop: "-60px",
            fontFamily: "Bangers",
            fontSize: "100px",
            backgroundColor: "#171725",
            color: "white",
            textAlign: "center"
          }}
        >
          Kwitter
        </h1>
        <h2 className="white" style={{ paddingLeft: "10%" }}>
          Your favorite microblogging platform
        </h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
