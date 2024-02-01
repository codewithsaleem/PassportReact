import React, { Component } from "react";
import http from "./httpServicePassport.js";
class Details extends Component {
    state = {}
    async componentDidMount() {
        let { id } = this.props.match.params;
        try {
            let response = await http.get("/myDetails");
            console.log("resp", response)
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
                <h2>Welcome to the employee page</h2>
                {user && (
                    <div className="">
                        Employee Id : {user.empCode} <br />
                        Name : {user.name} <br />
                        Department : {user.department} <br />
                        Designation : {user.designation} <br />
                        Salary : {user.salary} <br />
                        Gender : {user.gender} <br />
                    </div>
                )}
                {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}
            </div>
        )
    }
}
export default Details;