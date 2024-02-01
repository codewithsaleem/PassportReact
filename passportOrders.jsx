import React, { Component } from "react";
import http from "./httpServicePassport.js";
class Orders extends Component {
    state = {
        order: []
    }
    async fetchData() {
        let { type } = this.props.match.params;
        let url = type === "my" ? "/myOrders" : "/allOrders";
        try {
            let response = await http.get(url);
            let { data } = response;
            this.setState({ order: data, errorMsg: null })
        } catch (ex) {
            if (ex.response) {
                let errorMsg = `${ex.response.status} ${ex.response.statusText}`;
                this.setState({ order: [], errorMsg: errorMsg });
            }
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) this.fetchData();
    }
    render() {
        let { order, errorMsg } = this.state;
        return (
            <div className="container mt-4">
                <h2>Welcome to the order page</h2>
                {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}
                {order.map((ele, index) => (
                    <div className="row" key={index}>
                        <div className="col-2 border">{ele.orderId}</div>
                        <div className="col-2 border">{ele.userId}</div>
                        <div className="col-2 border">{ele.qty}</div>
                        <div className="col-2 border">{ele.value}</div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Orders;