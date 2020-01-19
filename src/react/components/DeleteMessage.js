import React from "react";
import { Button, Modal } from ".";
import { connect } from "../HOCs";
import { deleteMessages } from "../../redux/actionCreators";

class DeleteMessage extends React.Component {
  state = { open: false };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <Button
          onClick={() => this.setState({ open: true })}
          icon="trash alternate"
          size="mini"
          floated="right"
        ></Button>
        <Modal
          open={this.state.open}
          closeOnDimmerClick={false}
          onClose={this.close}
        >
          <Modal.Header>Delete Your Message</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your message?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={event =>
                this.props.deleteMessages(this.props.id, this.props.username) &&
                this.close
              }
              positive
              labelPosition="right"
              icon="checkmark"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = {
  deleteMessages
};

export default connect(null, mapDispatchToProps)(DeleteMessage);
