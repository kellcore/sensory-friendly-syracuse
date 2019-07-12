import React, { Component } from 'react';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    callAPI() {
        fetch("http://localhost:9000/signup")
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
                <h1> signup </h1>
                <h2> screen where new users can create an account </h2>
                <p className="App-intro">{this.state.apiResponse} </p>
            </div>
        )
    };
};

export default SignupPage;