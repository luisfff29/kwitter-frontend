import React from "react";
import { Icon } from ".";
import "./DarkMode.css";

const ThisIsTheBottom = () => (
  <div
    className="gray"
    style={{
      opacity: "0.5",
      paddingTop: "25vh",
      textAlign: "center",
      paddingBottom: "10px"
    }}
  >
    This is the bottom <Icon name="hand point down" aria-hidden="true" />
  </div>
);

export default ThisIsTheBottom;
