import React, { Component } from "react";
import http from "./httpServicePassport.js";
import auth from "./httpServicePassportAuth.js";
class Login extends Component {
    state = {
        form: { empCode: "", name: "" },
    }
    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.form[input.name] = input.value;
        this.setState(s1);
    }
    async postData(url, obj) {
        try {
            // let headerKey = "authorization";
            // let headerKey = "x-auth-token";
            let response = await http.post(url, obj);
            let { data} = response;
            // let token = headers[headerKey];
            auth.storeToken(data);
            this.props.history.push("/myDetails");
        } catch (ex) {
            if (ex.response) {
                let errorMsg = `${ex.response.status} ${ex.response.statusText}`;
                this.setState({ errorMsg: errorMsg });
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { form } = this.state;
        this.postData("/emp", form);
    }
    render() {
        let { empCode, name } = this.state.form;
        let { errorMsg } = this.state;
        return (
            <div className="container mt-4">
                {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}
                <form>
                    <div className="form-group">
                        <label className="form-group-label"><b>Empcode</b></label>
                        <input
                            className="form-control"
                            type="text"
                            id="empCode"
                            name="empCode"
                            value={empCode}
                            placeholder="Enter empCode"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group-label"><b>Name</b></label>
                        <input
                            className="form-control"
                            type="name"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;