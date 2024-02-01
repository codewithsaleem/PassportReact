import React, { Component } from "react";
import http from "./httpServicePassport.js";
class User extends Component {
    state = {}
    async componentDidMount() {
        let { id } = this.props.match.params;
        try {
            let response = await http.get("/user");
            let { data } = response;
            this.setState({ user: data });
        } catch (ex) {
            if (ex.response) {
                let errorMsg = `${ex.response.status} ${ex.response.statusText}`;
                this.setState({ errorMsg: errorMsg });
            }
        }
    }
    render() {
        let { user, errorMsg } = this.state;
        return (
            <div className="container mt-4">
                <h2>Welcome to the user page</h2>
                {user && (
                    <div className="">
                        User Id : {user.id} <br />
                        Name : {user.name} <br />
                        Role : {user.role}
                    </div>
                )}
                {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}
            </div>
        )
    }
}
export default User;