import React, { Component } from 'react';
import { Box, Heading } from "grommet";

class VenuesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    callAPI() {
        fetch("http://localhost:9000/venues")
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
                <Heading> venues </Heading>
                <h2> a place to gather places </h2>
                <p className="App-intro">{this.state.apiResponse} </p>
            </Box>
        )
    };
};

export default VenuesPage;