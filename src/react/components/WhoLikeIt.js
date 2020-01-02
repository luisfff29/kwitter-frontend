import React from "react";
import { Label } from "../components";

const WhoLikeIt = props => (
  <Label pointing="left">
    {props.esto.likes.length === 1 &&
      props.esto.likes.map(user => user.username + " ")[0] + " likes it"}
    {props.esto.likes.length === 2 &&
      props.esto.likes.map(user => user.username + " ")[0] +
        " and " +
        props.esto.likes.map(user => user.username + " ")[1] +
        " like it"}
    {props.esto.likes.length === 3 &&
      props.esto.likes.map(user => user.username + " ")[0] +
        ", " +
        props.esto.likes.map(user => user.username + " ")[1] +
        " and " +
        props.esto.likes.map(user => user.username + " ")[2] +
        " like it"}
    {props.esto.likes.length > 3 &&
      props.esto.likes.map(user => user.username + " ")[0] +
        ", " +
        props.esto.likes.map(user => user.username + " ")[1] +
        " and " +
        (props.esto.likes.length - 2) +
        " more like it"}
  </Label>
);

export default WhoLikeIt;
