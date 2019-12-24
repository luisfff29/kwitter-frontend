import React from "react";
import { Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
//import "./CreateUser.css"

class CreateUser extends React.Component {
    state = {  
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    };

    handleCreate = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <React.Fragment>
            <Menu isAuthenticated = {this.props.isAuthenticated} />

{/* make a handleCreate for what happens when submitted */}
          <h1><center>Welcome to Kwitter</center></h1>

        <form id="createUser" onSubmit={this.handleCreate}>
          <label htmlFor="FirstName">First Name</label>
          <input
            className = "field"
            type="text"
            name="FirstName"
            autoFocus
            required
            onChange={this.handleCreate}
          />
          <br />
          <label htmlFor="LastName">Last Name</label>
          <input
            className = "field"
            type="text"
            name="LastName"
            autoFocus
            required
            onChange={this.handleCreate}
          />
          <br />
           <label htmlFor="userName">Username</label>
          <input
            className = "field"
            type="text"
            name="userName"
            autoFocus
            required
            onChange={this.handleCreate}
          />
          <br />
           <label htmlFor="Email">Email</label>
          <input
            className = "field"
            type="email"
            name="Email"
            autoFocus
            required
            onChange={this.handleCreate}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            className = "field"
            type="password"
            name="password"
            required
            onChange={this.handleCreate}
          />
          <br />
           <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            className = "field"
            type="password"
            name="ConfirmPassword"
            required
            onChange={this.handleCreate}
          />
          <br />
          <button type="submit">
            Create
          </button>
        </form>

            </React.Fragment>
        )
    }
}
export default userIsNotAuthenticated(CreateUser);