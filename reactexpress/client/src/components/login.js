import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    callAPI() {
        fetch("http://localhost:9000/login")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    };
    componentDidMount() {
        this.callAPI();
    };
    render() {
        return (
            <div>
                <h1> login </h1>
                <h2> screen that accepts a username and a password </h2>
                <p className="App-intro">{this.state.apiResponse} </p>
            </div>
        )
    };
};

export default LoginPage;