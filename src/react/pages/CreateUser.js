import React from "react";
import { Menu, CreateUserForm } from "../components";
import { render } from "react-dom";

class CreateUser extends React.Component {
    render() {
        return (
            <>
            <Menu />
            <CreateUserForm />
            <h2>This is the CreateUser page</h2>
            </>
        );
    }
}

export default CreateUser;