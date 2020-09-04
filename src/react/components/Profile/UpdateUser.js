import React, { Component } from "react";
import { Button, Modal, Dropdown, Form } from "../../components";
import { withAsyncAction } from "../../HOCs";
import { Spinner } from "../../components";

class UpdateUser extends Component {
  state = {
    displayName: this.props.displayName,
    about: this.props.about,
    password: "",
    open: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUpdateUser = () => {
    this.props.updateUser(
      this.state.displayName,
      this.state.about,
      this.state.password
    );
    setTimeout(() => {
      if (this.props.error == null) {
        window.location.reload();
      }
    }, 1750);
  };

  openModal = () => {
    this.setState({ ...this.state, open: true });
  };

  closeModal = () => {
    this.setState({ ...this.state, open: false });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <Modal
        size="tiny"
        open={this.state.open}
        trigger={
          <Dropdown.Item onClick={this.openModal}>Update profile</Dropdown.Item>
        }
      >
        <Modal.Header>Upload your profile!</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Display Name</label>
              <Form.Input
                type="text"
                name="displayName"
                placeholder="Display Name"
                value={this.state.displayName}
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>About me</label>
              <Form.TextArea
                type="text"
                name="about"
                placeholder="Brief description about yourself"
                value={this.state.about}
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Form.Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
            </Form.Field>
          </Form>
          {loading && <Spinner name="circle" color="white" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.closeModal}>Cancel</Button>
          <Button onClick={this.handleUpdateUser}>Submit</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withAsyncAction("users", "updateUser")(UpdateUser);
