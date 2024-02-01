import React, { Component } from "react";
import http from "./httpServicePassport.js";
class MyJuniors extends Component {
    state = {
        user: []
    }
    async componentDidMount() {
        let { id } = this.props.match.params;
        try {
            let response = await http.get("/myJuniors");
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
                <h2>Welcome to the MyJuniors page</h2>
                {user && (
                    user.map((ele) => (
                        <div className="row">
                            <div className="col-sm-2 border">{ele.empCode}</div>
                            <div className="col-sm-2 border">{ele.name}</div>
                            <div className="col-sm-2 border">{ele.department}</div>
                            <div className="col-sm-2 border">{ele.designation}</div>
                            <div className="col-sm-2 border">{ele.salary}</div>
                            <div className="col-sm-2 border">{ele.gender}</div>
                        </div>
                    ))
                )}
                {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}
            </div>
        )
    }
}
export default MyJuniors;