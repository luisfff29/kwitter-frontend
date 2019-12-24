import React from "react";
import { userIsNotAuthenticated } from "../HOCs";
import { Menu, CreateUserForm } from "../components";


class CreateUser extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <CreateUserForm />
            </>
        );
    }
}

export default userIsNotAuthenticated(CreateUser);