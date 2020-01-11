import React from "react";
import { Button, Form } from "../components";
import "./DarkMode.css";

class MessageForm extends React.Component {
  render() {
    return (
      <Form reply>
        <Form.TextArea id="textarea" placeholder="Type a message..." />
        <Button
          id="button"
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    );
  }
}

export default MessageForm;
