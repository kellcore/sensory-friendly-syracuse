import React, { Component } from 'react';

class ReviewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    callAPI() {
        fetch("http://localhost:9000/reviews")
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
                <h1> reviews </h1>
                <h2> screen where logged in users can create, edit, and delete reviews </h2>
                <p className="App-intro">{this.state.apiResponse} </p>
            </div>
        )
    };
};

export default ReviewsPage;