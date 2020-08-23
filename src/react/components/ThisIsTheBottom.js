import React from "react";
import { Icon } from ".";

const ThisIsTheBottom = () => (
  <div
    style={{
      opacity: "0.5",
      paddingTop: "25vh",
      textAlign: "center",
      paddingBottom: "10px",
    }}
  >
    This is the bottom <Icon name="hand point down" aria-hidden="true" />
  </div>
);

export default ThisIsTheBottom;
