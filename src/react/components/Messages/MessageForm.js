import React from "react";
import { Button, Form } from "../../components";
import { connect } from "../../HOCs";
import { createMessage } from "../../../redux/actionCreators";

class MessageForm extends React.Component {
  state = { messageText: "" };

  handleCreateMessage = () => {
    this.props.createMessage(this.state.messageText);
    this.setState({ messageText: "" });
  };

  handleChangeMessage = (event) => {
    this.setState({ messageText: event.target.value });
  };

  render() {
    return (
      <Form>
        <Form.Input
          type="text"
          value={this.state.messageText}
          onChange={this.handleChangeMessage}
          placeholder="Type a message..."
        />
        <Button
          type="submit"
          onClick={this.handleCreateMessage}
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

const mapDispatchToProps = {
  createMessage,
};

export default connect(null, mapDispatchToProps)(MessageForm);
