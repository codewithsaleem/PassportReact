import React, { Component } from "react";
import http from "./httpServicePassport.js";
import auth from "./httpServicePassportAuth.js";

class Tracker extends Component {
    state = {
        det: [],
    }

    async fetchData() {
        let response = await http.get("/tracker");
        let { data } = response;
        this.setState({ det: data });
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) this.fetchData();
    }

    render() {
        let { det } = this.state;

        return (
            <div className="container mt-4">
                <h2 className="mb-4">Details of the Tracker</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col-sm-12">User</th>
                            <th scope="col-sm-12">url</th>
                            <th scope="col-sm-12">Date</th>
                        </tr>
                    </thead>
                    {det.map((ele) => (
                        <tbody>
                            <tr>
                                <td>{ele.user}</td>
                                <td>{ele.url}</td>
                                <td>{ele.date}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        );
    }
}

export default Tracker;
