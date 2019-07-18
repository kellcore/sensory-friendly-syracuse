import React, { Component } from 'react';
import { Box, Heading } from "grommet";

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
            <Box fill align="center" justify="center">
                <Heading> reviews </Heading>
                <h2> screen where logged in users can create, edit, and delete reviews </h2>
                <p className="App-intro">{this.state.apiResponse} </p>
            </Box>
        )
    };
};

export default ReviewsPage;